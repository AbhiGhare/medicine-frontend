import { CodicepsBillService } from '@/pages/service/codiceps-bill-service';
import { OurProductsBillService } from '@/pages/service/our-products-bill-service';
import { RowMaterialBillService } from '@/pages/service/row-material-bill-service';
import { TabletsBillService } from '@/pages/service/tablets-bill-service';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-inward-form',
  imports: [
     ReactiveFormsModule,
  SelectModule,
  InputTextModule,
  InputNumberModule,
  DatePickerModule,
  ButtonModule,
  MessageModule,
  ToastModule
  ],
  providers:[TabletsBillService,RowMaterialBillService,OurProductsBillService,CodicepsBillService,MessageService],
  templateUrl: './inward-form.html',
  styleUrl: './inward-form.scss',
})
export class InwardForm {

  inwardTypes = [
    { label: 'Row Material Inward', value: 'row-material' },
    { label: 'Codiceps Inward', value: 'codiceps' },
    { label: 'Tablet Inward', value: 'tablet' },
    { label: 'Our Product Making (Inward)', value: 'product-making' }
  ];

  hideFields = false;
  loading = false;
  form!:FormGroup
  

  constructor(
    private fb: FormBuilder,
    private rowMaterialBillService: RowMaterialBillService,
    private codicepsBillService: CodicepsBillService,
    private ourProductsBillService: OurProductsBillService,
    private tabletsBillService: TabletsBillService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
    type: [null, Validators.required],
    date: [null, Validators.required],
    name: ['', Validators.required],
    quantity: [null, Validators.required],
    bill: [''],
    invoice: ['']
  });
  }

  ngOnInit(): void {
    // Listen to type changes
    this.form.get('type')?.valueChanges.subscribe(type => {
      this.hideFields = type === 'product-making';

      if (this.hideFields) {
        this.form.get('bill')?.clearValidators();
        this.form.get('invoice_no')?.clearValidators();
      } else {
        this.form.get('bill')?.setValidators([Validators.required]);
        this.form.get('invoice_no')?.setValidators([Validators.required]);
      }

      this.form.get('bill')?.updateValueAndValidity();
      this.form.get('invoice_no')?.updateValueAndValidity();
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
     this.loading = true;
    const formValue = this.form.value;
    const { type, ...payload } = formValue;

    if(type=='row-material'){
      this.rowMaterialBillService.postRowMaterialBill(payload).subscribe({
        next:(res)=>{
          console.log('add row',res)
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res.message});
          this.loading = false;
        },
        error:(err)=>{
          console.error('err',err)
          this.loading = false;
        }
      })
    }
    if(type=='codiceps'){
      this.codicepsBillService.postCodicepsBill(payload).subscribe({
        next:(res)=>{
          console.log('add row',res)
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res.message});
          this.loading = false;
        },
        error:(err)=>{
          console.error('err',err)
          this.loading = false;
        }
      })
    }
    if(type=='tablet'){
      this.tabletsBillService.postTabletBill(payload).subscribe({
        next:(res)=>{
          console.log('add row',res)
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res.message});
          this.loading = false;
        },
        error:(err)=>{
          console.error('err',err)
          this.loading = false;
        }
      })
    }
    if(type=='product-making'){
      this.ourProductsBillService.postOurProductBill(payload).subscribe({
        next:(res)=>{
          console.log('add row',res)
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res.message});
          this.loading = false;
        },
        error:(err)=>{
          console.error('err',err)
          this.loading = false;
        }
      })
    }
    console.log('Submitted:', this.form.value);
  }
}

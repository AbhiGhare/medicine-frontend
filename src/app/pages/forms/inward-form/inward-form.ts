import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-inward-form',
  imports: [
     ReactiveFormsModule,
  SelectModule,
  InputTextModule,
  InputNumberModule,
  DatePickerModule,
  ButtonModule
  ],
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

  form!:FormGroup
  

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
    type: [null, Validators.required],
    date: [null, Validators.required],
    name: ['', Validators.required],
    quantity: [null, Validators.required],
    bill: [''],
    invoice_no: ['']
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
    console.log('Submitted:', this.form.value);
  }
}

import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-outward-form',
  imports: [
      ReactiveFormsModule,
  SelectModule,
  InputTextModule,
  InputNumberModule,
  DatePickerModule,
  ButtonModule
  ],
  templateUrl: './outward-form.html',
  styleUrl: './outward-form.scss',
})
export class OutwardForm {
  form!: FormGroup;
  outwardTypes = [
    { label: 'To Patients', value: 'patients' },
    { label: 'For Tableting', value: 'tableting' }
  ];
  selectedType: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      name: [''], // Patient name
      itemName: [''], // For patients
      materialName: [''], // For tableting
      quantity: [''],
      bill: [''],
      invoiceNo: ['']
    });
  }

  onTypeChange(type: string) {
    this.selectedType = type;

    // Clear unnecessary fields
    if (type === 'patients') {
      this.form.get('materialName')?.reset();
    } else if (type === 'tableting') {
      this.form.get('name')?.reset();
      this.form.get('itemName')?.reset();
      this.form.get('bill')?.reset();
      this.form.get('invoiceNo')?.reset();
    }
  }

  submit() {
    console.log(this.form.value);
  }
}

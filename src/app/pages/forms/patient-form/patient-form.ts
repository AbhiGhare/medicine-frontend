import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-patient-form',
  imports: [
      TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
    SelectModule,
  InputTextModule,
  InputNumberModule,
  ],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm {

  form!: FormGroup;
  totalBill: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      patientName: ['', Validators.required],
      date: [null, Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      items: this.fb.array([])
    });

    this.addItem(); // default one item row
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem() {
    const itemForm = this.fb.group({
      item: ['', Validators.required],
      quantity: [1, Validators.required],
      rate: [0, Validators.required]
    });

    this.items.push(itemForm);
    this.calculateTotal();
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalBill = this.items.value.reduce((total: number, i: any) => {
      return total + (i.quantity * i.rate);
    }, 0);
  }

  submit() {
    console.log("Form Submitted:", this.form.value);
    console.log("Total Bill:", this.totalBill);
  }
}

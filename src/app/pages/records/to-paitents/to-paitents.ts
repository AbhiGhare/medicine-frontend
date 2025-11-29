import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-to-paitents',
  imports: [
       TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './to-paitents.html',
  styleUrl: './to-paitents.scss',
})
export class ToPaitents  implements OnInit {

  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Sample data
    this.data = [
      { date: '2025-11-29', name: 'John Doe', item: 'test1', quantity: 5, bill: 500, invoice_no: 'INV001' },
      { date: '2025-11-28', name: 'Jane Smith', item: 'test2', quantity: 3, bill: 300, invoice_no: 'INV002' }
    ];
  }

}


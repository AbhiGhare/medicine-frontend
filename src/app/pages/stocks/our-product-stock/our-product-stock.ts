import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-our-product-stock',
  imports: [
      TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './our-product-stock.html',
  styleUrl: './our-product-stock.scss',
})
export class OurProductStock implements OnInit {

  stockList: any[] = [];

  ngOnInit(): void {
    // Example static data (later you can replace with API data)
    this.stockList = [
      { srno: 1, name: 'Paracetamol Powder', quantity: 50 },
      { srno: 2, name: 'Glucose', quantity: 120 },
      { srno: 3, name: 'Capsule Shell', quantity: 300 }
    ];
  }
}
import { CodicepsStockService } from '@/pages/service/codiceps-stock-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-codiceps-stock',
  imports: [
      TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CodicepsStockService],
  templateUrl: './codiceps-stock.html',
  styleUrl: './codiceps-stock.scss',
})
export class CodicepsStock implements OnInit {

  stockList: any[] = [];

  constructor(private codicepsStockService:CodicepsStockService){}
  ngOnInit(): void {
    this.codicepsStockService.getCodicepsAllStock().subscribe({
      next:(res)=>{
        this.stockList=res.data
      }
    })
    // Example static data (later you can replace with API data)
    this.stockList = [
      { srno: 1, name: 'Paracetamol Powder', quantity: 50 },
      { srno: 2, name: 'Glucose', quantity: 120 },
      { srno: 3, name: 'Capsule Shell', quantity: 300 }
    ];
  }
}

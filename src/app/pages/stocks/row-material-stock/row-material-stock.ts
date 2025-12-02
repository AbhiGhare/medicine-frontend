import { RowMaterialStockService } from '@/pages/service/row-material-stock-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-row-material-stock',
  imports: [
      TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[RowMaterialStockService],
  templateUrl: './row-material-stock.html',
  styleUrl: './row-material-stock.scss',
})
export class RowMaterialStock implements OnInit {

  stockList: any[] = [];

  constructor(private rowMaterialStockService:RowMaterialStockService){}
  ngOnInit(): void {
    this.rowMaterialStockService.getRomMaterialAllStock().subscribe({
      next:(res)=>{
        console.log('row stock',res)
        this.stockList=res.data
      },
      error:(err)=>{
        console.log('err',err)
      }
    })
    // Example static data (later you can replace with API data)
    // this.stockList = [
    //   { srno: 1, name: 'Paracetamol Powder', quantity: 50 },
    //   { srno: 2, name: 'Glucose', quantity: 120 },
    //   { srno: 3, name: 'Capsule Shell', quantity: 300 }
    // ];
  }
}
import { RowMaterialBillService } from '@/pages/service/row-material-bill-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-row-material',
  imports: [
     TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[RowMaterialBillService],
  templateUrl: './row-material.html',
  styleUrl: './row-material.scss',
})
export class RowMaterial implements OnInit {

  data: any[] = [];

  constructor(private rowMaterialBillService:RowMaterialBillService) { }

  ngOnInit(): void {
    this.rowMaterialBillService.getRowMaterialBill().subscribe({
      next:(res)=>{
        console.log('row---',res)
         this.data=res.data
      },
      error:(err)=>{
        console.error('err---',err)
      }
    })
    // Sample data
    // this.data = [
    //   { date: '2025-11-29', name: 'John Doe', quantity: 5, bill: 500, invoice_no: 'INV001' },
    //   { date: '2025-11-28', name: 'Jane Smith', quantity: 3, bill: 300, invoice_no: 'INV002' }
    // ];
  }

}

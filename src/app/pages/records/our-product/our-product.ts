import { OurProductsBillService } from '@/pages/service/our-products-bill-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-our-product',
  imports: [
     TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[OurProductsBillService],
  templateUrl: './our-product.html',
  styleUrl: './our-product.scss',
})
export class OurProduct implements OnInit {

  data: any[] = [];

  constructor(private ourProductsBillService:OurProductsBillService) { }
  
    ngOnInit(): void {
      this.ourProductsBillService.getOurProductBill().subscribe({
        next:(res)=>{
          console.log('ourproduct---',res)
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
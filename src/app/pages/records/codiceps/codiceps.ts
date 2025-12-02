import { CodicepsBillService } from '@/pages/service/codiceps-bill-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-codiceps',
 imports: [
     TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CodicepsBillService],
  templateUrl: './codiceps.html',
  styleUrl: './codiceps.scss',
})
export class Codiceps implements OnInit {

  data: any[] = [];

  constructor(private codicepsBillService:CodicepsBillService) { }
  
    ngOnInit(): void {
      this.codicepsBillService.getCodicepsBill().subscribe({
        next:(res)=>{
          console.log('codicep---',res)
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

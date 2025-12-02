import { TabletsBillService } from '@/pages/service/tablets-bill-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tablet',
  imports: [
      TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[TabletsBillService],
  templateUrl: './tablet.html',
  styleUrl: './tablet.scss',
})
export class Tablet implements OnInit {

  data: any[] = [];

 
   constructor(private tabletsBillService:TabletsBillService) { }
   
     ngOnInit(): void {
       this.tabletsBillService.getTabletBill().subscribe({
         next:(res)=>{
           console.log('tablet---',res)
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

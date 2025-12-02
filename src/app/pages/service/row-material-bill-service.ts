import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RowMaterialBillService {
  private baseURL:any=environment.apiUrl
  constructor(private http:HttpClient){}

  getRowMaterialBill():Observable<any>{
    return this.http.get<any>(this.baseURL+'/row-material/bill')
  }
  postRowMaterialBill(data:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/row-material/bill',data)
  }
}

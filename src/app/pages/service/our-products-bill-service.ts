import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OurProductsBillService {
   private baseURL:any=environment.apiUrl
  constructor(private http:HttpClient){}

  getOurProductBill():Observable<any>{
    return this.http.get<any>(this.baseURL+'/our-product/bill')
  }
  postOurProductBill(data:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/our-product/bill',data)
  }
}

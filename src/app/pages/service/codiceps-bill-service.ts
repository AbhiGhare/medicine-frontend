import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CodicepsBillService {
   private baseURL:any=environment.apiUrl
  constructor(private http:HttpClient){}

  getCodicepsBill():Observable<any>{
    return this.http.get<any>(this.baseURL+'/codiceps/bill')
  }
  postCodicepsBill(data:any):Observable<any>{
    return this.http.post<any>(this.baseURL+'/codiceps/bill',data)
  }
}

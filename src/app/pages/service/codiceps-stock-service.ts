import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CodicepsStockService {
   private baseURL:any=environment.apiUrl
  constructor(private http: HttpClient){}
  getCodicepsAllStock():Observable<any>{
    return this.http.get<any>(this.baseURL+'/codiceps/stock/')
  }
}

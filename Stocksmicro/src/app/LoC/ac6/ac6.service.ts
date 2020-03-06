import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ac6 } from './ac6';

@Injectable({
  providedIn: 'root'
})
export class Ac6Service {

  
 private baseUrl = 'http://localhost:8081/Stockprice/stockprice';



 constructor(private http:HttpClient) { }

 getAllStockPrice(): Observable<any> {

 return this.http.get(`${this.baseUrl}`+'/getAllStockPrice');

 }

 saveStockPrice(stockPrice: Ac6): Observable<Ac6> {

 return this.http.post<Ac6>(`${this.baseUrl}`+'/saveStockPrice', stockPrice);

 }

 deleteStockPrice(companyname: String): Observable<Ac6> {

  return this.http.delete<Ac6>(`${this.baseUrl}/deleteStockPrice/${companyname}`);

 }

 findOneInAll5(companyname: String): Observable<Ac6> {

  return this.http.get<Ac6>(`${this.baseUrl}/findOneInAll5/${companyname}`);

 }

 updateStockPrice(companyname: String, value: any): Observable<Ac6> {

  return this.http.put<Ac6>(`${this.baseUrl}/updateStockPrice/${companyname}`, value);

 }

}
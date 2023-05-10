import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url : string = "http://localhost:8080"
  invoices : Invoice[] = []

  constructor(private http:HttpClient) { }

  findAllInvoices():Observable<unknown>{
    return this.http.get('${this.url}/invoices', {headers: this.setHttpAuth()})
  }

  setHttpAuth():HttpHeaders{
    let token = localStorage.getItem("token")
    if(token){
      return new HttpHeaders({authorization:token})
    }
    return new HttpHeaders();
  }
}

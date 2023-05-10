import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = "http://localhost:8080"
  user : User[] = []

  constructor(private http:HttpClient) { }

  findAllInvoices(){
    

  }
}

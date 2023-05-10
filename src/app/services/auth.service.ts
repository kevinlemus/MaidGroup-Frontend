import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080"
  user: User = {} as User

  constructor(private http:HttpClient) { }

  login(user:Pick<User, 'username' | 'password'>):Observable<unknown>{
    return this.http.post('${url}/login', user, {responseType: 'text', observe: 'response' as 'body'})
    console.log(user)
  }

  logout(){
    localStorage.removeItem("token")
  }

}

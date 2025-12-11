import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getProfile(){
    return this.http.get<any>('https://dummyjson.com/user/me');
  }
  getUsers(){
    return this.http.get<any>('https://dummyjson.com/users');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) {}

  LoginService(username: string, password: string,expiresInMins?: number){
    console.log('LoginService called with', username, password);
    return this.http.post<any>('https://dummyjson.com/auth/login',{
      username:username,
      password:password,
      expiresInMins:expiresInMins || 60
    });
  }
}

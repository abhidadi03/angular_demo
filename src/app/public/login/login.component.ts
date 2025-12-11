import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  errMessage: string = '';
  isLoading: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private storageService: StorageService
  ) { 
    this.LoginForm = this.fb.group({
      username: ['',[ Validators.required, Validators.minLength(4)]],
      password: ['',[ Validators.required, Validators.minLength(6)]]
    });
  }
redirectToregister(){
  this.router.navigate(['/register']);
}
login(){
  console.log("user n the login ---",this.LoginForm.value.username);
  this.isLoading = true;
  console.log(this.LoginForm.value);
  this.loginService.LoginService(
    this.LoginForm.value.username,
    this.LoginForm.value.password,
  ).pipe(finalize(()=> this.isLoading = false))
  .subscribe({
    next:(res)=>{
      // this.isLoading = false;
      this.router.navigate(['/dashboard']);
      console.log('Login Successful', res);
      this.storageService.save('token', res.accessToken);
    },
    error:(err)=>{
      // this.isLoading = false;
      this.errMessage = err.error.message;
      console.log('Error Message Set:', this.errMessage);
      console.error('Login Failed', err);
    }
  });
}
}

import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup;
  constructor(private fb: FormBuilder, private router:Router){
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$')]],
      address:['',[Validators.required,Validators.minLength(6)]],
      country:['',[Validators.required]],
      website:['',[Validators.pattern('https?://.+')]],
      linkedIn:['',[Validators.pattern('https?://(www\\.)?linkedin\\.com/.*')]]

    })
  }
registerUser(){
  console.log('user registered successfully');
  alert('User registered successfully');
  this.router.navigate(['/login']);
  this.registerForm.reset();
  this.registerForm.markAsUntouched();
  
}
}

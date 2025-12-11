import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LoginComponent} from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Routes , RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { MatGridListModule } from '@angular/material/grid-list';
const routes: Routes =[
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent}

]
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatGridListModule
  ],
  exports:[RouterModule]
})
export class PublicModule { }

import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  showForm:boolean = false;
  userForm:FormGroup;
  columnNames:string[] = ['firstName','lastName','age'];
  headers:string[] =['First Name','Last Name','Age']
  users: any[] = [];
  formFields =[
    {name:'firstName',displayName:'First Name',type:'text'},
    {name:'lastName',displayName:'Last Name',type:'text'},
    {name:'age',displayName:'Age',type:'number'}
  ];

  constructor(private userService:UsersService,
    private fb:FormBuilder,
    private dialog:MatDialog
  ) { 
    this.userForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      age:['']
    })
  }

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next:(res)=>{
        this.users = res.users;
        console.log('Users data', res);
      },
      error:(err)=>{
        console.error('Failed to load users', err);
      }
    });
  }
  // fromTheChild(row:any){
  //   this.showForm = true;
  //   this.userForm.patchValue({
  //     firstName:row.firstName,
  //     lastName:row.lastName,
  //     age:row.age
  //   })
  // }
  fromTheChild(user:any){
    console.log('1')
    const dialogRef = this.dialog.open(
      PopUpComponent,{
        width:'600px',
        data:{
          value:user,
          fields:this.formFields
        }
      }
    );
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        console.log('Form data',result);
      }
    })
  }
}

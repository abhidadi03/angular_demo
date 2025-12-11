import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  placeHolder:string='serach';
  columnNames:string[] =['customer_name','country','type','contact_person','contact_number','status']
  headers:string[] =['Customer Name','Country','Type','Contact Person','Contact Number','Status']
  formFields =[
    {name:'customer_name',displayName:'Customer Name',type:'string'},
    {name:'country',displayName:'Country',type:'string'},
    {name:'type',displayName:'Type',type:'string'},
    {name:'contact_person',displayName:'Contact Person',type:'string'},
    {name:'contact_number',displayName:'Contact Number',type:'number'},
    {name:'status',displayName:'Status',type:'string'}
  ]
  customers:any[] =[
    {'customer_name':'Abhi','country':'india','type':'Ship Manager','contact_person':'test 1','contact_number':9399390000,'status':'Active'},
    {'customer_name':'Hemanth','country':'US','type':'Ship Manager','contact_person':'test 2','contact_number':9399390001,'status':'Pending'},
    {'customer_name':'Harish','country':'Uk','type':'Port Agent','contact_person':'test 3','contact_number':9399390002,'status':'Approved'},
    {'customer_name':'Teja','country':'india','type':'Ship Manager','contact_person':'test 4','contact_number':9399390003,'status':'Active'},
    {'customer_name':'Kiran','country':'india','type':'Port Agent','contact_person':'test 5','contact_number':9399390004,'status':'Active'},
    {'customer_name':'Bheema','country':'india','type':'Ship Manager','contact_person':'test 6','contact_number':9399390005,'status':'Active'},
    {'customer_name':'Sagar','country':'india','type':'Port Agent','contact_person':'test 7','contact_number':9399390006,'status':'Active'},
    {'customer_name':'jacob','country':'Russia','type':'Ship Manager','contact_person':'test 8','contact_number':9399390007,'status':'Active'},
    {'customer_name':'jagan','country':'india','type':'Port Agent','contact_person':'test 9','contact_number':9399390008,'status':'Active'},
    {'customer_name':'Ratanakar','country':'india','type':'Ship Manager','contact_person':'test 01','contact_number':9399390009,'status':'Active'},
    {'customer_name':'Ganesh','country':'india','type':'Port Agent','contact_person':'test 001','contact_number':9399390010,'status':'Active'},
    {'customer_name':'Siva','country':'india','type':'Ship Manager','contact_person':'test 012','contact_number':9399390020,'status':'Active'},
    {'customer_name':'Suresh','country':'india','type':'Port Agent','contact_person':'test 10','contact_number':9399390030,'status':'Active'},
    {'customer_name':'abcd','country':'india','type':'Ship Manager','contact_person':'test 11','contact_number':9399390040,'status':'Active'},
  ];
  constructor(private dialog:MatDialog){}
  fromTheChild(a: any){
    console.log('form the child------',a);
    const dialogRef = this.dialog.open(
      PopUpComponent,{
        width:'600px',
        data:{
          value:a,
          fields:this.formFields
        }
      }
    )
  }
}

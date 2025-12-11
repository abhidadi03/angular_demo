import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  // userForm: FormGroup;
  form!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
 ngOnInit(){
  const group:any = {};
  console.log('in the comon fields',this.data.value);
  this.data.fields.forEach((f:any) => {
    group[f.name] = [this.data.value ? this.data.value[f.name] : ''];
  });
  console.log('groupppp------',group);
  this.form = this.fb.group(group);
  console.log('dataaaaaaaaa',this.form)
 }
  save() {
    const original = this.data.value;
    const updated = this.form.value;
    const modifed:any = {};

    for(const key in updated){
      console.log('keysssss',key)
      if(updated[key] !== original[key]){
        modifed[key] = updated[key]
      }
    }
    console.log('modified valueeeeeeeee',modifed);
    this.dialogRef.close(this.form.value);
  }
}

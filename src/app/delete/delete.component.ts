import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  name!: string;
  class!: string;
  rollNo!: string;
  student_rollno!:string
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private router: Router,private signUpService:MyServiceService){
  console.log("0009090909009",this.data);
  this.student_rollno = this.data.Roll_No
    
  }

  onSaveClick() {
    console.log(this.name,  this.class, this.rollNo);

    let stdObj={
      stdname:this.name,
      stdclass:this.class,
      stdrollno:this.rollNo,
      id:this.data.id
    }
    console.log("stdObj",stdObj)

    this.signUpService.deleteStudent(stdObj).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    
    this.dialogRef.close({ });
  }

  onCancelClick(): void {
  this.dialogRef.close();
  }
}

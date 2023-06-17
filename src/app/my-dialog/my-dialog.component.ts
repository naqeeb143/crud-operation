import { Component,Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  name!: string;
 class!: string;
 rollNo!: string;
  dialog: any;
  public stdname="";
  public stdclass="";
  public stdrollno="";

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private router: Router,private signUpService:MyServiceService){
    
  }
 

  onSaveClick() {
    console.log(  this.name,  this.class, this.rollNo);

    let stdObj={
      stdname:this.name,
      stdclass:this.class,
      stdrollno:this.rollNo
    }
    console.log("stdObj",stdObj)

    this.signUpService.createStudent(stdObj).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    
    this.dialogRef.close({ name: this.name, class: this.class, rollNo: this.rollNo });
  }

  onCancelClick(): void {
  this.dialogRef.close();
  }
}




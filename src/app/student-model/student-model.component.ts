import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-student-model',
  templateUrl: './student-model.component.html',
  styleUrls: ['./student-model.component.css']
})
export class StudentModelComponent {
  
  studentData: any ={};

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Access the data and do something with it
        console.log('Name:', result.name);
        console.log('Class:', result.class);
        console.log('Roll No:', result.rollNo);
      }
    });
  }

}

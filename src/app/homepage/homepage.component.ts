import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
public student:any
public students:any
public result:any
  constructor(public dialog: MatDialog,private router: Router,private signUpService:MyServiceService) {
    this.getAllRecord()
  
  }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '300px',
      height: '300px',
      position:{
        top: '10%',
        left: '40%',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.result = result
      this.getAllRecord()

      this.router.navigate(['/homepage']); 
    });
  }

  openEditDialog(data:any){

    console.log("=-=-=-=-=-=",data)
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: data,
      width: '300px',
      height: '300px',
      position:{
        top: '10%',
        left: '40%',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.result = result
     this.getAllRecord()
      this.router.navigate(['/homepage']); 
    });
  }
  openDeleteDialog(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.signUpService.deleteStudent(id).subscribe(
          (response) => {
            this.getAllRecord()
            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error!', 'Failed to delete the data.', 'error');
          }
        );
      }
    });
   
  }
  getAllRecord(){
    this.signUpService.getData().subscribe(
      (response) => {
      console.log("response",response);
      this.students = response
      this.student = this.students.data
      console.log(response);
      },
    )
  }
}

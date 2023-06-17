import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signupForm= new FormGroup({
    name: new FormControl("",[Validators.required ,Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),

    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),

    password: new FormControl('',[Validators.required,Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),

    gender: new FormControl('',[Validators.required]),

    phoneNo: new FormControl('',[Validators.required,Validators.pattern('[- +()0-9]{10,12}')])

   })
   signUser(form:any)
   {
    console.log(form.value);
    let obj ={
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      gender: form.value.gender,
      phoneNo: form.value.phoneNo
    }
    this.signUpService.createAccount(obj).subscribe(
      (response) => {
        // Handle the response from the backend
        console.log(response);
      },
    )
   }
   get signUp(){
   return this.signupForm.controls;
  }
  constructor(private signUpService:MyServiceService ) {
  
  }
  
}

import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email= "";
  public password= "";
  

  constructor(private authService: MyServiceService,public router:Router){ }
  
  onSubmit(login:any){
    const value="";
    let loginObj={

      email: this.email,
      password: this.password,
    }
    console.log(loginObj)
   
    this.authService.login(loginObj).subscribe((response:any)=>{
      console.log(response)
      if(response.MyToken){
      const token = response.MyToken;
        localStorage.setItem("token",token)
        localStorage.getItem("token")
        this.router.navigate(['/homepage']); 
    }
    })
  }

  ngOnInit() {
  
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  createAccount(data:any) {
    console.log(">>>>>>>>>>>>>>",data)
    return this.http.post('http://localhost:3000/data', data);
  }
  login(data:any){
    console.log("*********",data)
    return this.http.post('http://localhost:3000/loginapi',data)
  }
  homepageAccount(data:any){
    console.log("*********",data)
    return this.http.post('http://localhost:3000/homepage',data)
  }
  homeData(data:any){
    console.log("^^^^^^^^^^^^^", data)
    return this.http.get('http://localhost:3000/homegetData',data)
  }
  createStudent(data:any){
    return this.http.post('http://localhost:3000/studentData',data)
  }
  getData(){
    return this.http.get('http://localhost:3000/getdata')
  }

  updateStudent(data:any){
    return this.http.post('http://localhost:3000/updateStudent',data)
  }
  deleteStudent(id:any){
    const url = `http://localhost:3000/deleteStudent/${id}`;

    return this.http.delete(url)
  }
}

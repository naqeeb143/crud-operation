import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentModelComponent } from './student-model/student-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomepageComponent,
    StudentModelComponent,
    MyDialogComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

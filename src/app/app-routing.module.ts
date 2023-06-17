import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentModelComponent } from './student-model/student-model.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{ path:"",
  component:LoginComponent},
  {path:"create",
  component:SignUpComponent},
{
  path: "homepage",
  component: HomepageComponent
},
{
  path: "studentModel", component: StudentModelComponent
},
{
  path: "updateStudent", component: UpdateComponent
},
{
  path: "deleteStudent", component: DeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

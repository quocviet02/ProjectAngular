import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminLayoutComponent } from './layout/main-admin-layout/main-admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { MainClientLayoutComponent } from './layout/main-client-layout/main-client-layout.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';

import { AddProjectComponent } from './pages/admin/add-project/add-project.component';
import { EditProjectComponent } from './pages/admin/edit-project/edit-project.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { DetailProjectComponent } from './pages/admin/detail-project/detail-project.component';
import { AddTaskComponent } from './pages/admin/Employee/add-task/add-task.component';
import { TaskListComponent } from './pages/admin/Employee/task-list/task-list.component';

const routes: Routes = [
  //Router Client
  {path:'',component:MainClientLayoutComponent, children:[
    {path:'', redirectTo:"home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'detail', component:DetailComponent}
  ]},
  //Router Register
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  //Router Admin
  {path:'admin',component:MainAdminLayoutComponent, children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'users',component:UsersComponent},
    {path:'dashboard',component:AdminHomeComponent},
    {path:'detail-project/:id',component:DetailProjectComponent},

    {path:'add-project',component:AddProjectComponent},
    {path:'edit-project/:id',component:EditProjectComponent},
    {path:'edit-user/:id',component:EditUserComponent},
    {path:'add-task', component:AddTaskComponent},
    {path:'task-list/:id',component:TaskListComponent}
  ]},
  {path:'**', component:NopageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

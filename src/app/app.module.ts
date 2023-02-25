import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import  {DragDropModule} from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainClientLayoutComponent } from './layout/main-client-layout/main-client-layout.component';
import { MainAdminLayoutComponent } from './layout/main-admin-layout/main-admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { LoginComponent } from './pages/login/login.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddProjectComponent } from './pages/admin/add-project/add-project.component';
import { EditProjectComponent } from './pages/admin/edit-project/edit-project.component';
import { UsersComponent } from './pages/admin/users/users.component';

import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { DetailProjectComponent } from './pages/admin/detail-project/detail-project.component';
import { AddTaskComponent } from './pages/admin/Employee/add-task/add-task.component';
import { TaskListComponent } from './pages/admin/Employee/task-list/task-list.component';
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainClientLayoutComponent,
    MainAdminLayoutComponent,
    HomeComponent,
    DetailComponent,
    AdminHomeComponent,
    LoginComponent,
    NopageComponent,
    SignupComponent,
    BannerComponent,
    FooterAdminComponent,
    AddProjectComponent,
    EditProjectComponent,
    UsersComponent,

    EditUserComponent,
    DetailProjectComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { IUserInfor } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // users:IUserInfor[]=[]
  // constructor(private userService:AuthService){
  //   this.userService.getAllUsers().subscribe((data:any)=>{
  //     this.users=data
  //     console.log(data);
      
  //   })
  // }
  
  users:IUserInfor[]=[]
  search:any
  constructor(private authService:AuthService){
    this.authService.getAllUsers().subscribe((data:any)=>{
      this.users=data
    })
  }
  onHandleDelete(id:number){
    this.authService.deleteUser(id).subscribe(()=>{

    })
  }
  
  
}

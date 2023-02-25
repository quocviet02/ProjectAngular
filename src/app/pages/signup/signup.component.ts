import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user={}
  name:string=""
  email:string=""
  password:string=""
  role:number=2
  constructor(private Signup:AuthService, private router:Router){}
  onHandleSignup(){
   
    const user={
      role:this.role,
      name:this.name,
      email:this.email,
      password:this.password

    }
    this.Signup.signup(user).subscribe((data)=>{
      if (data) {
        Swal.fire({
          icon: 'success',
          text: 'Đăng ký thành công!',
        });
        this.router.navigateByUrl('/login')
        
        
      }
      
      
    })
    
    
  }
}

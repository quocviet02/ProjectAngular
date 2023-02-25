import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}
  user = {};
  email: string = '';
  password: string = '';
  onHandleLogin() {
    const users = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(users).subscribe((data) => {
      
      if (data) {
        Swal.fire({
          icon: 'success',
          text: 'Đăng nhập thành công!',
        });
        this.router.navigateByUrl('/admin');
        
      }
      
    
      const { user }: any = data;
      console.log(user);
      localStorage.setItem('nameUser',JSON.stringify(user))
      
      if (user.role==2) {
        this.router.navigateByUrl('/admin/task-list/')
      }
      
    });
  }
}

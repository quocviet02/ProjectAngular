import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  userInfor: any = localStorage.getItem('nameUser');
  result: any = JSON.parse(this.userInfor);
  constructor() {
    console.log(JSON.parse(this.userInfor));
  }
  css:string=""
  showI(){
    this.css="block"
    setTimeout(() => {
      this.css="none"
    }, 3000);
  }
}

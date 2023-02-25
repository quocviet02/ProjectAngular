import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  project={}
  image:string=""
  name:string=""
  description:string=""
  teamSize:number=0
  constructor(private router:Router,private httpClient:HttpClient){

  }
  onHandleAdd(){

  }
}

import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  project:IProject[]=[];
  constructor(private projectSevice:ProjectService){}
  ngOnInit(): void {
      this.projectSevice.getAllProjects().subscribe((data:any)=>{
        this.project=data
      })
  }
}

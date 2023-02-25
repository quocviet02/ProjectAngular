import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  project={}
  image:string=""
  name:string=""
  start:string=""
  teamSize:number=0
  constructor(private projectService:ProjectService,private router:Router,private httpClient:HttpClient){

  }
  onHandleAdd(){
    this.project={
      name:this.name,
      start:this.start,
      teamSize:this.teamSize,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
    }
    this.projectService.addProject(this.project).subscribe((item)=>{
      if (item) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm thành công!',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigateByUrl('/admin')
      }
    })
  }
}

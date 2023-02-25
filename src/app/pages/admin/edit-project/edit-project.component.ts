import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/Project';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project!:IProject;
  constructor(private router:Router, private projectSevice:ProjectService, private activeRouter:ActivatedRoute){}
  ngOnInit(): void {
      this.activeRouter.params.subscribe(params=>{
        const id = params['id']
        if (params) {
          this.projectSevice.getProject(id).subscribe(item=> {
            this.project =item
          })
        }
      })
  }
  onHandleUpdate(){
    this.projectSevice.editProject(this.project).subscribe((item)=>{
      if (item) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sửa thành công!',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigateByUrl('/admin')
      }
    })
  }
}

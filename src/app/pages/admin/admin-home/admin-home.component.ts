import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/Project';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
 
  project:IProject[]=[]
  search:any
  constructor(private projectService:ProjectService){
    this.projectService.getAllProjects().subscribe((data:any)=>{
      this.project=data
    })
  }
  onHandleDelete(id:number){
    Swal.fire({
      icon:'warning',
      text:'Chắc chắn xóa',
    }).then(()=>{
      this.projectService.removeProject(id).subscribe(()=>{
        this.project=this.project.filter(item=>item.id !==id)
      })
    })
    // if (confirm('Chắn chắn xóa?')) {
    //   // this.projectService.removeProject(id).subscribe(()=>{
    //   //   this.project=this.project.filter(item=>item.id !==id)
    //   // })
    // }
    
    // Swal.fire({
    //   position: 'center',
    //   icon:'warning',
    //   title:'Chắc chắn xóa',
    //   showConfirmButton: false,
    //   confirmButtonText:'Xóa',
    //   timer: 2500
    // }).then(() => {
     
    //    alert('d')
     
    // });
   
    
  }
  drop(event:CdkDragDrop<string[]>){
    moveItemInArray(this.project,event.previousIndex,event.currentIndex)
  }
  userInfor: any = localStorage.getItem('nameUser');
  result: any = JSON.parse(this.userInfor);
  
}

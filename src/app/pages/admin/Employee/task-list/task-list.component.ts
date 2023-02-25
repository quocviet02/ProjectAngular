import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  todo: any = [{ name: 1 }];
  doing: any = [{ name: 2 }];
  done: any = [{ name: 3 }];
  id:number=0
  listUser:any=[]

  draggedItem: any;
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = Number(params['id'])
      console.log(typeof(this.id));
      this.taskService.getAllUser(this.id).subscribe((item:any)=>{
        this.listUser = item.users
        console.log('user',this.listUser);
        
      })
      this.taskService.getAllTask(this.id).subscribe((item: any) => {
        let data = item.tasks
        this.todo = [...this.todo, ...this.fill(1, data)];
        this.doing = [...this.doing, ...this.fill(2, data)];
        this.done = [...this.done, ...this.fill(3, data)];
      });
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    const dataHandler = {
      id: this.draggedItem.id,
      status: this.checkIsNumber(event.container.data),
    };
    console.log(dataHandler);

    this.taskService.editTask(dataHandler).subscribe((data) => {
      console.log(data);
    });
  }
  fill(condition: any, data: any) {
    return data.filter((item: any) => item.status == condition);
  }
  onDragStarted(item: any) {
    this.draggedItem = item;
    //

    //   })
    // console.log(this.draggedItem);
  }
  checkIsNumber(data: any) {
    let dataCheck = null;
    data.forEach((item: any) => {
      if (typeof item.name == 'number') {
        dataCheck = item.name;
      }
    });
    return dataCheck;
  }

  showInAdd: any = '';
  taskInput: string = '';
  status: any;
  showItask() {
    this.showInAdd = 'block';
  }
  addTask() {
    let task = {
      name: this.taskInput,
      status: 1,
      projectId:this.id
    };
    this.taskService.addTask(task).subscribe((data) => {
      this.todo = [...this.todo, data];
      this.taskInput = '';
      this.showInAdd = 'none';
    });
  }
  // ngOnInit(){
  //   this.route.params.subscribe(params=>{
  //       let id = params['id'];
  //       console.log(id);
  //   })

  // }
}

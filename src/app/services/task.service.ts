import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task';
import {Observable}from 'rxjs';
import { TASK_PORT } from '../utils/constants';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API="http://localhost:3000/projects"
  constructor( private httpClient: HttpClient) { }

  getAllTask(id:number): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(`http://localhost:3000/projects/${id}?_embed=tasks`);
  }
  getAllUser(id:number): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(`http://localhost:3000/projects/${id}?_embed=users`);
  }
  getTask(id:number): Observable<ITask>{
    return this.httpClient.get<ITask>(`${TASK_PORT}/${id}`)
  }
  addTask(task:any): Observable<ITask[]>{
    return this.httpClient.post<ITask[]>(TASK_PORT,task)
  }

  editTask(task:any):Observable<ITask[]>{
    return this.httpClient.patch<ITask[]>(`${TASK_PORT}/${task.id}`,{status:task.status})
  }
  removeTask(id:any):Observable<ITask[]>{
    return this.httpClient.delete<ITask[]>(`${TASK_PORT}/${id}`)
  }
}

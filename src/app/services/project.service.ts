import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/Project';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROJECT_PORT } from '../utils/constants';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API="http://localhost:3000/projects"
  constructor( private httpClient: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.httpClient.get<IProject[]>(PROJECT_PORT);
  }
  getProject(id:number): Observable<IProject>{
    return this.httpClient.get<IProject>(`${PROJECT_PORT}/${id}`)
  }
  addProject(project:any): Observable<IProject[]>{
    return this.httpClient.post<IProject[]>(PROJECT_PORT,project)
  }

  editProject(project:IProject):Observable<IProject[]>{
    return this.httpClient.put<IProject[]>(`${PROJECT_PORT}/${project.id}`,project)
  }
  removeProject(id:any):Observable<IProject[]>{
    return this.httpClient.delete<IProject[]>(`${PROJECT_PORT}/${id}`)
  }
}

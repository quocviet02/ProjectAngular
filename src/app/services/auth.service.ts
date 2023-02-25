import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserInfor, IUserLogin, IUserRegister } from '../interfaces/user';
import { LOGIN_PORT, PROJECT_PORT, REGISTER_PORT, USER_PORT } from '../utils/constants';
import { catchError,retry  } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getAllUsers():Observable<IUserInfor[]>{
    return this.http.get<IUserInfor[]>(USER_PORT)
  }//admin
  deleteUser(id:number):Observable<IUserInfor[]>{
    return this.http.delete<IUserInfor[]>(`${USER_PORT}/${id}`)
  }

  login(data: IUserLogin): Observable<IUserLogin[]> {
    return this.http.post<IUserLogin[]>(LOGIN_PORT, data);
  }
  signup(data:IUserRegister):Observable<IUserRegister[]>{
    return this.http.post<IUserRegister[]>(REGISTER_PORT,data)
  }
}

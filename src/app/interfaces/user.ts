export interface IUserInfor {
  id: number;
  name: string;
  role?: number;
  password: string;
  email: string;
  avatar: string;
}
export interface IUserRegister {
  name: string;
  role?: number;
  password: string;
  email:string;
}
export interface IUserLogin {
  email: string;
  password: string;
  name?:string
}
export interface IUser{
  email?:string,
  name?:string,
  id?:number,
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  public adduser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public addadmin(user:any){
    return this.http.post(`${baseUrl}/user/addadmin`,user);
  }

  public deleteadmin(email:any){
    console.log(email);
    return this.http.delete(`${baseUrl}/user/${email}`);
  }
  //changeuserpassword
  public changepassword(user:any){
    return this.http.post(`${baseUrl}/user/changepassword`,user)
  }

  
}

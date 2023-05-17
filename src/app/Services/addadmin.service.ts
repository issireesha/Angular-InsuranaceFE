import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddadminService {

  constructor(private http:HttpClient) { }

  addadmin(user:any){
    return this.http.post(`${baseUrl}/user/addadmin`,user);
  }

  deleteadmin(email:string){
    return this.http.post(`${baseUrl}/user/`,email);
  }

  getalladmin(){
    return this.http.get(`${baseUrl}/user/getadmin`);
  }
}

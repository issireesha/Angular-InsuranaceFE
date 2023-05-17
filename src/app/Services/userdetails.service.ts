import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) { }

  updateuserdetails(User_Details:any){
    return this.http.post(`${baseUrl}/userdetails/`,User_Details);
  }

  getUserdetails(email:any){
    console.log(`${baseUrl}/${email}`);
    return this.http.get(`${baseUrl}/userdetails/${email}`);
  }
}

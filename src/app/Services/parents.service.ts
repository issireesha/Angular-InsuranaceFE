import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  constructor(private http:HttpClient) { }

  addParent(parents:any){
    return this.http.post(`${baseUrl}/parents/`,parents);
  }

  getsingleparent(email:any){
    console.log(email);
    return this.http.get(`${baseUrl}/parents/${email}`);
  }

}

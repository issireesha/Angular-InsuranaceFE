import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  constructor(private http:HttpClient) { }

  addChildren(children:any){
    return this.http.post(`${baseUrl}/children/`,children);
  }

  getsinglechildren(email:any){
    console.log(email);
    return this.http.get(`${baseUrl}/children/${email}`);
  }
}

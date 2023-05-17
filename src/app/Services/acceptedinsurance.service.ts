import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AcceptedinsuranceService {

  constructor(private http:HttpClient) { }
  
  email:any="";

  public getallacceptedinsurance(email:any){
    this.email=email;
    return this.http.get(`${baseUrl}/acceptedinsurances/useracceptedinsurance/${email}`);
  }

  public getcountoftype(email:any,insuranceType:any){
    return this.http.get(`${baseUrl}/acceptedinsurances/countdental/${email}/${insuranceType}`);
  }

  public getsingleacceptedinsurance(email:any){
    return this.http.get(`${baseUrl}/acceptedinsurances/${email}`);
  }

  public updateaccpetedinsurance(insurance:any){
    return this.http.post(`${baseUrl}/acceptedinsurances/update`,insurance);
  }
}

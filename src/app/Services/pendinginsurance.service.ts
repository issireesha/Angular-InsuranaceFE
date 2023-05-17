import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PendinginsuranceService {

  constructor(private http:HttpClient) { }

  getAllpendingInsurance(){
    return this.http.get(`${baseUrl}/pendinginsurance/`);
  }

  addPendingInsurance(insurance:any){
    return this.http.post(`${baseUrl}/pendinginsurance/`,insurance);
  }
  updatePendingInsurance(insurance:any){
    console.log(insurance);
    return this.http.post(`${baseUrl}/pendinginsurance/update/`,insurance);
  }
  
  getUserPendingInsurance(email:any){
    return this.http.get(`${baseUrl}/pendinginsurance/getuserpendinginsurance/${email}`)
  }

  getPendingInsuranceCount(){
    return this.http.get(`${baseUrl}/pendinginsurance/getcount`);
  }

  getUserPendingInsuranceCount(email:any){
    console.log(email);
    return this.http.get(`${baseUrl}/pendinginsurance/getuserpendinginsurancecount/${email}`);
  }
  getSinglePendingInsurance(insuranceNumber:any){
    return this.http.get(`${baseUrl}/pendinginsurance/${insuranceNumber}`);
  }
}

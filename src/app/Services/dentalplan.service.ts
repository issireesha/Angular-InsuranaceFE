import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DentalplanService {

  constructor(private http:HttpClient) {}

  public getdentalplans(){
    return this.http.get(`${baseUrl}/dentalinsurance/`);
  }

  public adddentalplan(plan:any){
    return this.http.post(`${baseUrl}/dentalinsurance/`,plan);
  }

  public getSingledentalplan(insuranceId:any){
    console.log(insuranceId);
    return this.http.get(`${baseUrl}/dentalinsurance/${insuranceId}`);
  }

  public deletedentalplan(insuranceId:any){
    console.log(insuranceId);
    return this.http.delete(`${baseUrl}/dentalinsurance/${insuranceId}`);
  }
  public updatedentalplan(dentalinsurance:any){
    console.log(dentalinsurance);
    return this.http.post(`${baseUrl}/dentalinsurance/update`,dentalinsurance);
  }
}

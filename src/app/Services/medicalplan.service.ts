import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicalplanService {

  constructor(private http:HttpClient) { }

  public getmedicalplans(){
    return this.http.get(`${baseUrl}/medicalinsurance/`)
  }

  public getSingleplan(insuranceId:any){
    console.log(insuranceId);
    return this.http.get(`${baseUrl}/medicalinsurance/${insuranceId}`);
  }

  public addMedicalplan(medicalplan:any){
    return this.http.post(`${baseUrl}/medicalinsurance/`,medicalplan);
  }

  public updateMedicalplan(medicalplan:any){
    console.log(medicalplan);
    return this.http.put(`${baseUrl}/medicalinsurance/updateplan`,medicalplan);
  }

  public deletemedicalplan(insuranceId:any){
    return this.http.delete(`${baseUrl}/medicalinsurance/${insuranceId}`);
  }
}

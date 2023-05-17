import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loggedIn=false;

  

  //getCurrent user
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }

  //generate token
  public generateToken(user:any){
      return this.http.post(`${baseUrl}/generate-token`,user)
  }

  //store user token in local storage
  public loginUser(token:any){
    let temp2:any=Object.values(token);
    localStorage.setItem("token",temp2);
    this.loggedIn=true;
    return true;
  }

  //check user is logged in or not
  public IsLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=="" || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //remove token from localstorage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.loggedIn=false;
    return true;
  }

  //get token
  public getToken(){
    let storedToken= localStorage.getItem("token");
    return storedToken;
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  public getUserEmail(){
    let user=this.getUser();
    return user.email;
  }
  
  public getcurrentpassword(){
    let user=this.getUser();
    return user.password;
  }
  public getpassword(email:any,password:any){
    return this.http.get(`${baseUrl}/user/encode/${email}/${password}`);
  }

  // public setpassword(email:any){
  //   localStorage.setItem("password",JSON.stringify(email));
  // }

  // public getpassword2(){
  //   let password=localStorage.getItem("password");
  //   if(password!=null){
  //   return JSON.parse(password);
  //   }
  // }

  // public getpassword3(){
  //   let pass=this.getpassword2();
  //   return pass.password;
  // }

  // public deletepassword(){
  //   localStorage.removeItem("password");
  //   return true;
  // }
  
}

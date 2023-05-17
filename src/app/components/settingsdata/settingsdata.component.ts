import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserdetailsService } from 'src/app/Services/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settingsdata',
  templateUrl: './settingsdata.component.html',
  styleUrls: ['./settingsdata.component.css']
})
export class SettingsdataComponent implements OnInit {

  userDetails={
    firstname:"",
    lastname:"",
    middlename:"",
    phone:"",
    email:"",
    pan:"",
    aadhar:"",
  }

email:any="";
user={
accountNonExpired:"",
accountNonLocked: "",
authorities: {
      authority: ''
            },
credentialsNonExpired: "",
email: "",
enabled: "",
password: "",
profile: "",
username: ""
}
  @Input() collapsed=false;
  @Input() screenwidth=0;


  constructor(private snack:MatSnackBar,private service:UserdetailsService,private login:LoginService,private router:Router) { }
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
          this.user=data;
          this.email=this.user.email;
          this.userDetails.email=this.email;
          console.log(this.email);
          this.getUserDetails(this.email);
      }
    )
  }
  getUserDetails(email:any){
    //get userdetails using email
    this.service.getUserdetails(this.email).subscribe(
      (data:any)=>{
        if(data!=null){
        this.userDetails=data;}
      }
    )
  }

  back(){
    this.router.navigate(["admindashboard"]);
  }

  putuserdetails(){
    console.log(this.userDetails);
    if(this.userDetails.aadhar==null || this.userDetails.aadhar==""){
      this.snack.open("Aadhar Number cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.email==null || this.userDetails.email==""){
      this.snack.open("Email cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.phone==null || this.userDetails.phone==""){
      this.snack.open("Phone Number cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.firstname==null || this.userDetails.firstname==""){
      this.snack.open("First Name cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.middlename==null || this.userDetails.middlename==""){
      this.snack.open("Middle Name cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.lastname==null || this.userDetails.lastname==""){
      this.snack.open("Last name cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.userDetails.pan==null || this.userDetails.pan==""){
      this.snack.open("Pan Number cannot be empty","Dismiss",{
        duration:2000
      });
    }else{
        this.service.updateuserdetails(this.userDetails).subscribe(
          (data:any)=>{
            this.userDetails=data;
            console.log(this.userDetails);
            if(this.userDetails.aadhar!=null && this.userDetails.firstname!=null && this.userDetails.lastname!=null &&
              this.userDetails.middlename!=null && this.userDetails.phone!=null && this.userDetails.pan!=null &&
             this.userDetails.email!=null){
                // this.snack.open("Details Updated sucessfully !","Dismiss",{
                //   duration:5000
                // });
                Swal.fire("Success","Details updated successfully !","success").then(()=>{
                  window.location.reload();
                });
              }
          },
          (error)=>{
            this.snack.open("Something Went Wrong !","Dismiss",{
              duration:5000
            });
          }
        
        )
    }
  }

  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenwidth>768){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenwidth<=768 && this.screenwidth>0){
      styleClass='body-md-screen';
    }
    return styleClass;
  }

}

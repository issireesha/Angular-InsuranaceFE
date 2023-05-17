import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceptedinsuranceService } from 'src/app/Services/acceptedinsurance.service';
import { ChildrenService } from 'src/app/Services/children.service';
import { LoginService } from 'src/app/Services/login.service';
import { ParentsService } from 'src/app/Services/parents.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import { UserdetailsService } from 'src/app/Services/userdetails.service';

@Component({
  selector: 'app-viewsubmittedapplication',
  templateUrl: './viewsubmittedapplication.component.html',
  styleUrls: ['./viewsubmittedapplication.component.css']
})
export class ViewsubmittedapplicationComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;
  primary_subscriber={
    email:"",
    insuranceId:"",
    insuranceType:"",
    insuranceName:"",
    primarySubscriberFirstname:"",
    primarySubscriberMiddlename:"",
    primarySubscriberLastname:"",
    primarySubscriberAge:"",
    primarySubscriberAddress:"",
    primarySubscriberAadharNo:"",
    primarySubscriberPanNo:"",
    primarySubscriberPhone:"",
    primarySubscriberGender:"",
    submittedDate:"",
    expiryDate:"",
  }
 insuranceId:any="";
 insurance_details={
  insuranceId:"",
  insuranceType:"",
  insuranceName:"",
 insuranceDescription:"",
 premium:""
}
user_details={
  email:"",
  firstname:"",
  middlename:"",
  lastname:"",
  phone:"",
  aadhar:"",
  pan:""
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
family:any="";
constructor(private actRoute:ActivatedRoute,private service:AcceptedinsuranceService,
 private login:LoginService,private userdetails:UserdetailsService,
 private snack:MatSnackBar,private pending:PendinginsuranceService,
 private router:Router) {}

ngOnInit(): void {
 //get insurance details
 this.insuranceId=this.actRoute.snapshot.params['id'];
 console.log(this.insuranceId);
 this.service.getsingleacceptedinsurance(this.insuranceId).subscribe(
   (data:any)=>{
     this.primary_subscriber=data;
   }
 );
}

back(){
  this.router.navigate(['/userdashboard/yourplans'])
}

getuserdetails(email:any){
 //get user details
 this.userdetails.getUserdetails(this.user.email).subscribe(
   (data:any)=>{
     this.user_details=data;
     this.primary_subscriber.email=this.user_details.email;
     this.primary_subscriber.primarySubscriberFirstname=this.user_details.firstname;
     this.primary_subscriber.primarySubscriberMiddlename=this.user_details.middlename;
     this.primary_subscriber.primarySubscriberLastname=this.user_details.lastname;
     this.primary_subscriber.primarySubscriberAadharNo=this.user_details.aadhar;
     this.primary_subscriber.primarySubscriberPanNo=this.user_details.pan;
     this.primary_subscriber.primarySubscriberPhone=this.user_details.phone;
   }
 )
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

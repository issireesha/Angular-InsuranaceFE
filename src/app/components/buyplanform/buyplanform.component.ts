import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DentalplanService } from 'src/app/Services/dentalplan.service';
import { LoginService } from 'src/app/Services/login.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import { UserdetailsService } from 'src/app/Services/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyplanform',
  templateUrl: './buyplanform.component.html',
  styleUrls: ['./buyplanform.component.css']
})
export class BuyplanformComponent implements OnInit {
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
     premium:"",
  }

  insurance_details={
     insuranceId:"",
     insuranceType:"",
     insuranceName:"",
    insuranceDescription:"",
    premium:"",
    coverage:""
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
  insuranceId:any="";
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
  constructor(private actRoute:ActivatedRoute,private service:DentalplanService,
    private login:LoginService,private userdetails:UserdetailsService,
    private snack:MatSnackBar,private pending:PendinginsuranceService) {}

  ngOnInit(): void {
    //get insurance details
    this.insuranceId=this.actRoute.snapshot.params['id'];
    console.log(this.insuranceId);
    this.service.getSingledentalplan(this.insuranceId).subscribe(
      (data:any)=>{
        this.insurance_details=data;
      }
    );
    //get user email
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
        this.email=this.user.email;
        this.getuserdetails(this.email);
      }
    )
    
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
  buynewdentalplan(){
    const date=new Date().toLocaleDateString();
    const month=date.slice(0,5);
    const year=date.slice(5,date.length);
    const add=Number(year)+1;
   const expirydate=month+add;
   this.primary_subscriber.submittedDate=date;
   this.primary_subscriber.expiryDate=expirydate;

   //calculate premium
   let c:number=Number(this.insurance_details.coverage);
   let age:number=Number(this.primary_subscriber.primarySubscriberAge);
   let p:number=0;
   if(age>0 && age<=15){
      p=c*0.013
   }
   else if(age>15 && age<=24){
     p=c*0.025
   }
   else if(age>24 && age<=50){
     p=c*0.03
   }else if(age>50 && age<=70){
     p=c*0.04
   }else{
     Swal.fire("Dental Insurance is not available for people aged above 70");
     return;
   }
    this.primary_subscriber.premium=String(p);
  if(this.primary_subscriber.email==null || this.primary_subscriber.email==""){
              this.snack.open("Primary Subscriber Email cannot be Empty!","Dismiss",{
                duration:2000
              });
  }else if(this.primary_subscriber.primarySubscriberFirstname==null || this.primary_subscriber.primarySubscriberFirstname==""){
            this.snack.open("Primary Subscriber Firstname cannot be Empty!","Dismiss",{
              duration:2000
            });
  }else if(this.primary_subscriber.primarySubscriberMiddlename==null || this.primary_subscriber.primarySubscriberMiddlename==""){
          this.snack.open("Primary Subscriber Middlename cannot be Empty!","Dismiss",{
            duration:2000
          });
  }else if(this.primary_subscriber.primarySubscriberLastname==null || this.primary_subscriber.primarySubscriberLastname==""){
        this.snack.open("Primary Subscriber Lastname cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberAge==null || this.primary_subscriber.primarySubscriberAge==""){
        this.snack.open("Primary Subscriber Age cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberAadharNo==null || this.primary_subscriber.primarySubscriberAadharNo==""){
        this.snack.open("Primary Subscriber Aadhar Number cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberGender==null || this.primary_subscriber.primarySubscriberGender==""){
        this.snack.open("Primary Subscriber Pan Number cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberPhone==null || this.primary_subscriber.primarySubscriberPhone==""){
        this.snack.open("Primary Subscriber Phone Number cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberAddress==null || this.primary_subscriber.primarySubscriberAddress==""){
        this.snack.open("Primary Subscriber Address cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else if(this.primary_subscriber.primarySubscriberPanNo==null || this.primary_subscriber.primarySubscriberPanNo==""){
        this.snack.open("Primary Subscriber Address cannot be Empty!","Dismiss",{
          duration:2000
        });
  }else {
          this.primary_subscriber.insuranceName=this.insurance_details.insuranceName;
          this.primary_subscriber.insuranceId=this.insurance_details.insuranceId;
          this.primary_subscriber.insuranceType=this.insurance_details.insuranceType;

          Swal.fire({
            title:'Are you sure ?',
            text:'Your insurance premium is '+this.primary_subscriber.premium+"/- yearly",
            showCancelButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Buy it !'
          }).then((result)=>{
            if(result.isConfirmed){
              this.pending.addPendingInsurance(this.primary_subscriber).subscribe(
                (data)=>{
                  //this.snack.open("Thank You for buying insurance.","Dimsiss");
                  Swal.fire("Success","Purchased Insurance Successfully !","success");
                },
                (error)=>{
                  this.snack.open("Something went wrong","Dismiss",{
                    duration:5000
                  })
                }
              )
            }else{
              Swal.fire("We hope you'll buy our insurance next time !");
            }
          })
          
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

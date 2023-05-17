import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { ParentsService } from 'src/app/Services/parents.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import { UserdetailsService } from 'src/app/Services/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editapplicationdata',
  templateUrl: './editapplicationdata.component.html',
  styleUrls: ['./editapplicationdata.component.css']
})
export class EditapplicationdataComponent implements OnInit {
  @Input() collapsed=false;
  @Input() screenwidth=0;

  primary_subscriber={
    insuranceNumber:"",
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
    feedback:"",
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

constructor(private actRoute:ActivatedRoute,private service:PendinginsuranceService,
 private login:LoginService,private userdetails:UserdetailsService,
 private snack:MatSnackBar,private pending:PendinginsuranceService,
 private router:Router) {}

ngOnInit(): void {
 //get insurance details
 this.insuranceId=this.actRoute.snapshot.params['id'];
 console.log(this.insuranceId);
 this.service.getSinglePendingInsurance(this.insuranceId).subscribe(
   (data:any)=>{
     this.primary_subscriber=data;
   }
 );
}

back(){
  this.router.navigate(['/admindashboard/pendinginsurances'])
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

editInsurance(){
  const date=new Date().toLocaleDateString();
  const month=date.slice(0,5);
  const year=date.slice(5,date.length);
  const add=Number(year)+1;
 const expirydate=month+add;
 this.primary_subscriber.submittedDate=date;
 this.primary_subscriber.expiryDate=expirydate;
  
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
      //add insurance into table
        this.pending.updatePendingInsurance(this.primary_subscriber).subscribe(
          (data)=>{
            //this.snack.open("Thank You for buying insurance.","Dimsiss");
            Swal.fire("Success","Insurance details updated successfully","success").then(()=>{
              window.location.reload();
            })
          },
          (error)=>{
            this.snack.open("Something went wrong","Dismiss",{
              duration:5000
            })
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

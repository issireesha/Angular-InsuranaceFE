import { Component, Input, OnInit } from '@angular/core';
import { AcceptedinsuranceService } from 'src/app/Services/acceptedinsurance.service';
import { LoginService } from 'src/app/Services/login.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';

@Component({
  selector: 'app-userdashboarddata',
  templateUrl: './userdashboarddata.component.html',
  styleUrls: ['./userdashboarddata.component.css']
})
export class UserdashboarddataComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

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
  count:any="";
  constructor(private service:PendinginsuranceService,private login:LoginService,
    private accepted:AcceptedinsuranceService) { }

    medicalcount:any="";
    dentalcount:any="";
    typ1:any="Medical";
    typ2:any="Dental";

   
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
        this.email=this.user.email;
        this.getPendingInsuranceCount(this.email);
        this.getAcceptedMedicalInsuranceCount(this.email,this.typ1);
        this.getAcceptedMedicalInsuranceCount2(this.email,this.typ2);
      }
    ) 
    }

   getAcceptedMedicalInsuranceCount(email:any,typ2:any){
    this.accepted.getcountoftype(this.email,this.typ2).subscribe(
      (data:any)=>{
        console.log(data);
        this.dentalcount=data;
      }
    )
   }
  
getAcceptedMedicalInsuranceCount2(email:any,typ2:any){
  this.accepted.getcountoftype(this.email,this.typ1).subscribe(
    (data:any)=>{
      console.log(data);
      this.medicalcount=data;
    }
  )
}

  getPendingInsuranceCount(email:any){
      this.service.getUserPendingInsuranceCount(email).subscribe(
        (data:any)=>{
          this.count=data;
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

  renew(){
    
  }

  router(email:any){
  }
}

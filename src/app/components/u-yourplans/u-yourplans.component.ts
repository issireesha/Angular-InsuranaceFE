import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AcceptedinsuranceService } from 'src/app/Services/acceptedinsurance.service';
import { LoginService } from 'src/app/Services/login.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-u-yourplans',
  templateUrl: './u-yourplans.component.html',
  styleUrls: ['./u-yourplans.component.css']
})
export class UYourplansComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;


  constructor(private service:PendinginsuranceService,private snack:MatSnackBar,private login:LoginService,
    private accepted:AcceptedinsuranceService,private route:Router) { }

  displayedColumns: any[]=[
    "insuranceNumber",
    "email",
    "insuranceId",
    "insuranceType",
    "actions",
    "renew"
  ]

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

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
  pendingInsurance_data={
      insuranceNumber:"",
      email:"",
      insuranceId:"",
      insuranceType:"",
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
  listData!: MatTableDataSource<any>;
  email:any="";
  ngOnInit(): void {
    //get current user
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
        this.email=this.user.email;
        this.getuserpendinginsurances(this.email)
      }
    )

    
  }

  getuserpendinginsurances(email:any){
    this.accepted.getallacceptedinsurance(email).subscribe(
      (data:any)=>{
       this.listData=new MatTableDataSource(data);
       this.listData.sort=this.sort;
       this.listData.paginator=this.paginator;
      },
      (error)=>{
        console.log(error);
        this.snack.open("Oops!, Error loading data","Dismiss",{
          duration:5000
        });
      }
    )
  }
  router(id:any){
      this.route.navigate(['yourplans/viewapplication',id]);
  }
  submiiteddate:any="";
  expirydate:any="";
  temp:any="";
  year:any="";
  month:any="";
  renew(id:any){
   
  // const date=new Date().toLocaleDateString();
  // const month=date.slice(0,5);
  // const year=date.slice(5,date.length);
  // const add=Number(year)+1;
  // const expirydate=month+add;
  // this.primary_subscriber.submittedDate=date;
  // this.primary_subscriber.expiryDate=expirydate;
    this.accepted.getsingleacceptedinsurance(id).subscribe(
      (data:any)=>{
          this.pendingInsurance_data=data;
          console.log(this.pendingInsurance_data);
          this.submiiteddate=this.pendingInsurance_data.submittedDate;
          this.expirydate=this.pendingInsurance_data.expiryDate;
          console.log(this.submiiteddate);
          console.log(this.expirydate);
      }
    )
    this.submiiteddate=new Date().toLocaleString();
    this.month=this.submiiteddate.slice(0,5);
    this.year=this.submiiteddate.slice(5,this.submiiteddate.length);
    this.year=Number(this.year)+1;
    this.expirydate=this.month+this.year;
    this.pendingInsurance_data.submittedDate=this.submiiteddate;
    this.pendingInsurance_data.expiryDate=this.expirydate;

    this.accepted.updateaccpetedinsurance(this.pendingInsurance_data).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("Sucsess","Insurance Renewed Successfully","success")
        //this.snack.open("Insurance renewed successfully","Dismiss");
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

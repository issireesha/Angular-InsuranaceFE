import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import { UserfeedbackdialogComponent } from '../userfeedbackdialog/userfeedbackdialog.component';

@Component({
  selector: 'app-userpendingdata',
  templateUrl: './userpendingdata.component.html',
  styleUrls: ['./userpendingdata.component.css']
})
export class UserpendingdataComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor(private service:PendinginsuranceService,private snack:MatSnackBar,private login:LoginService,
    private dialog:MatDialog,private router:Router) { }

  displayedColumns: any[]=[
    "insuranceNumber",
    "email",
    "insuranceId",
    "insuranceType",
    "actions"
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
  pendingInsurance_data=[
    {
      insuranceNumber:"",
      email:"",
      insuranceId:"",
      insuranceType:"",
      familyInsurance:"",
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
      no_of_members:"",
      feedback:"",
    }
  ]
  listData!: MatTableDataSource<any>;
  email:any="";
  ngOnInit(): void {
    //get current user
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        console.log(data);
        this.user=data;
        this.email=this.user.email;
        console.log(this.email);
        this.getuserpendinginsurances(this.email);
      }
    )

    
  }
  editapplication(insuranceNumber:any){
    this.router.navigate(['userpendinginsurance/edit',insuranceNumber]);
  }

  Feedback(insuranceNumber:any){
    this.dialog.open(UserfeedbackdialogComponent,{
      position:{top:"50vh",left:"60vh"},
      data:{insuranceNumber}
    })
  }

  getuserpendinginsurances(email:any){
    console.log(email);
    this.service.getUserPendingInsurance(email).subscribe(
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

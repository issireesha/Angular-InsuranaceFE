import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminfeedbackdialogComponent } from '../adminfeedbackdialog/adminfeedbackdialog.component';

@Component({
  selector: 'app-a-pending-data',
  templateUrl: './a-pending-data.component.html',
  styleUrls: ['./a-pending-data.component.css']
})
export class APendingDataComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor(private service:PendinginsuranceService,private snack:MatSnackBar,private router:Router,private dialog1:MatDialog) { }

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
      expiryDate:""
    }
  ]
  listData!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.service.getAllpendingInsurance().subscribe(
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

  route(insurancenumber:any,email:any){
    this.router.navigate(['/pendinginsurances/underwriter',insurancenumber]);
  }
  dialog(insurancenumber:any){
    this.dialog1.open(AdminfeedbackdialogComponent,{
      position:{top:"50vh",left:"60vh"},
      data:{id:insurancenumber}
  })
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

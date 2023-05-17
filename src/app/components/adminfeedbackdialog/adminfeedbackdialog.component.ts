import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DentalplanService } from 'src/app/Services/dentalplan.service';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminfeedbackdialog',
  templateUrl: './adminfeedbackdialog.component.html',
  styleUrls: ['./adminfeedbackdialog.component.css']
})
export class AdminfeedbackdialogComponent implements OnInit {

  pendingInsurance_data={
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
                submittedDate:"",
                feedback:"",
                expiryDate:""
  }
  insuranceNumber:any="";
  constructor(private snack:MatSnackBar,private service:PendinginsuranceService,@Inject(MAT_DIALOG_DATA) private id:any ) {
    this.insuranceNumber=id;
    console.log(this.insuranceNumber);
   }

  ngOnInit(): void {
    this.insuranceNumber=Object.values(this.insuranceNumber);
    this.service.getSinglePendingInsurance(this.insuranceNumber).subscribe(
      (data:any)=>{
        this.pendingInsurance_data=data;
      }
    )
  }

  givefeedback(){
    console.log("hi")
    this.service.updatePendingInsurance(this.pendingInsurance_data).subscribe(
      (data:any)=>{
        // this.snack.open("Feed back given sucessfuly","Dismiss",{
        //   duration:3000
        // })
        Swal.fire("Success","Feedback submitted successfully !","success").then(()=>{
          window.location.reload();
        })
      }
    )
  }

}

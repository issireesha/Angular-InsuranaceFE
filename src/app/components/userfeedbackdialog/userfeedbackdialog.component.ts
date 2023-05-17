import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';

@Component({
  selector: 'app-userfeedbackdialog',
  templateUrl: './userfeedbackdialog.component.html',
  styleUrls: ['./userfeedbackdialog.component.css']
})
export class UserfeedbackdialogComponent implements OnInit {

  pendingInsurance_data={
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
    feedback:"",
    expiryDate:""
}
insuranceNumber:any="";
constructor(private snack:MatSnackBar,private service:PendinginsuranceService,@Inject(MAT_DIALOG_DATA) private id:any ,
private dialogRef: MatDialogRef<UserfeedbackdialogComponent>) {
this.insuranceNumber=id;
console.log(this.insuranceNumber);
}

closedialog(){
  this.dialogRef.close();
}

ngOnInit(): void {
this.insuranceNumber=Object.values(this.insuranceNumber);
this.service.getSinglePendingInsurance(this.insuranceNumber).subscribe(
(data:any)=>{
this.pendingInsurance_data=data;
console.log(this.pendingInsurance_data.familyInsurance);
}
)
}

}

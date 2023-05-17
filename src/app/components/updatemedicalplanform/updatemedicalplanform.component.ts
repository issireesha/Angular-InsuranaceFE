import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicalplanService } from 'src/app/Services/medicalplan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatemedicalplanform',
  templateUrl: './updatemedicalplanform.component.html',
  styleUrls: ['./updatemedicalplanform.component.css']
})
export class UpdatemedicalplanformComponent implements OnInit {

  insurancedata={
    insuranceId:"",
    insuranceType:"",
    insuranceName:"",
    insuranceDescription:"",
    coverage:""
  }
  insuranceId:any;
  constructor(private snack:MatSnackBar,private service:MedicalplanService,@Inject(MAT_DIALOG_DATA) private id:any) { 
    this.insuranceId=id;
  }



  ngOnInit(): void {
    this.insuranceId=Object.values(this.insuranceId);
    console.log(this.insuranceId);
    this.service.getSingleplan(this.insuranceId).subscribe(
      (data:any)=>{
        this.insurancedata=data;
        console.log(this.insurancedata);
      }
    )
  }

  addnewdentalplan(){
    if(this.insurancedata.insuranceId==null || this.insurancedata.insuranceId==""){
        this.snack.open("Insurance Id Cannot be empty","Dismiss",{
          duration:2000
        })
    }else if(this.insurancedata.insuranceName==null || this.insurancedata.insuranceName==""){
      this.snack.open("Insurance Name Cannot be empty","Dismiss",{
        duration:2000
      })
  }else if(this.insurancedata.insuranceType==null || this.insurancedata.insuranceType==""){
    this.snack.open("Insurance Type Cannot be empty","Dismiss",{
      duration:2000
    })
}else if(this.insurancedata.insuranceDescription==null || this.insurancedata.insuranceDescription==""){
  this.snack.open("Insurance Description Cannot be empty","Dismiss",{
    duration:2000
  })
}else if(this.insurancedata.coverage==null || this.insurancedata.coverage==""){
  this.snack.open("Premium Cannot be empty","Dismiss",{
    duration:2000
  })
}else{
  this.service.updateMedicalplan(this.insurancedata).subscribe(
    (data:any)=>{
      console.log(data);
      // this.snack.open("Plan added successfully!","Dismiss",{
      // duration:2000
      //     })
      Swal.fire("Success","Plan updated successfuly !","success").then(()=>{
        window.location.reload();
      });
    },
    (error)=>{
      this.snack.open("Something went wrong !","Dismiss",{
        duration:3000
      })
    }
  )
}
  }

}

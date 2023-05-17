import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DentalplanService } from 'src/app/Services/dentalplan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adddentalplanform',
  templateUrl: './adddentalplanform.component.html',
  styleUrls: ['./adddentalplanform.component.css']
})
export class AdddentalplanformComponent implements OnInit {

  insurancedata={
    insuranceId:"",
    insuranceType:"",
    insuranceName:"",
    insuranceDescription:"",
    premium:"",
    coverage:""
  }
  constructor(private snack:MatSnackBar,private service:DentalplanService) { }

  ngOnInit(): void {
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
  this.snack.open("Coverage Cannot be empty","Dismiss",{
    duration:2000
  })
}else{
  //calculate premium
  let p:number=Number(this.insurancedata.coverage);
  let c:number=p*0.013;
  console.log(c);
  this.insurancedata.premium=String(c);

  this.service.adddentalplan(this.insurancedata).subscribe(
    (data:any)=>{
      this.insurancedata=data;
      console.log(this.insurancedata.insuranceId);
      if(this.insurancedata.insuranceId!=null && this.insurancedata.insuranceName!=null && this.insurancedata.insuranceType!=null &&
        this.insurancedata.insuranceDescription!=null && this.insurancedata.premium!=null){
          // this.snack.open("Plan added successfully!","Dismiss",{
          //   duration:2000
          // })
          Swal.fire("Sucsess","Dental plan added Sucessfully !","success").then(()=>{
            window.location.reload();
          })
        }
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

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DentalplanService } from 'src/app/Services/dentalplan.service';
import Swal from 'sweetalert2';
import { AdddentalplanformComponent } from '../adddentalplanform/adddentalplanform.component';
import { UpdatedentalplansformComponent } from '../updatedentalplansform/updatedentalplansform.component';

@Component({
  selector: 'app-dentalplansdata',
  templateUrl: './dentalplansdata.component.html',
  styleUrls: ['./dentalplansdata.component.css']
})
export class DentalplansdataComponent implements OnInit {
 plans=[
   {
     insuranceId:"",
     insuranceName:"",
     insuranceType:"",
     insuranceDescription:"",
     premium:"",
     coverage:""
   }
 ]
  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor(private serv:DentalplanService,private dialog:MatDialog,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.serv.getdentalplans().subscribe(
      (data:any)=>{
        this.plans=data;
      },
      (error)=>{
        console.log(error);
      }
      )
  }

addnewplan(){
  this.dialog.open(AdddentalplanformComponent,{
    position:{top:"50vh",left:"60vh"},
  });
}

updatedentalinsurance(insuranceId:any){
  this.dialog.open(UpdatedentalplansformComponent,{
    position:{top:"50vh",left:"60vh"},
    data:{id:insuranceId}
  }
    
    )
}

deletedentalinsurance(insuranceId:any){
  this.serv.deletedentalplan(insuranceId).subscribe(
    (data)=>{
      // this.snack.open("deleted sucessfully!","Dismiss",{
      //   duration:3000
      // })
      Swal.fire("Success","Plan deleted successfully !","success").then(()=>{
        window.location.reload();
      });
    },
    (error)=>{
      this.snack.open(error);
    }
  );
 
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

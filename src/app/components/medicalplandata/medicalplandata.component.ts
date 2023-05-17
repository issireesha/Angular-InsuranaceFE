import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicalplanService } from 'src/app/Services/medicalplan.service';
import Swal from 'sweetalert2';
import { AddmedicalplanformComponent } from '../addmedicalplanform/addmedicalplanform.component';
import { UpdatemedicalplanformComponent } from '../updatemedicalplanform/updatemedicalplanform.component';

@Component({
  selector: 'app-medicalplandata',
  templateUrl: './medicalplandata.component.html',
  styleUrls: ['./medicalplandata.component.css']
})
export class MedicalplandataComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

  medicalplan=[
    {
      insuranceId:"",
      insuranceName:"",
      insuranceDescription:"",
      insuranceType:"",
      premium:"",
      coverage:""
    }
  ]
  constructor(private service:MedicalplanService,private dialog:MatDialog) { }
  updatemedicalplan(insuranceId:any){
    this.dialog.open(UpdatemedicalplanformComponent,{
      position:{top:"50vh",left:"60vh"},
      data:{id:insuranceId}
    });
  }

  deletemedicalplan(insuranceId:any){
    this.service.deletemedicalplan(insuranceId).subscribe(
      (data)=>{
        Swal.fire("Success","Plan deleted successfully !","success").then(()=>{
          window.location.reload();
        });
      }
    )
  }
  ngOnInit(): void {
    this.service.getmedicalplans().subscribe(
      (data:any)=>{
        this.medicalplan=data;
      },
      (error)=>{
        console.log(error);
      }
      )
  }
  addnewplan(){
    this.dialog.open(AddmedicalplanformComponent,{
      position:{
        top:"50vh",
        left:"50vh"
      }
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

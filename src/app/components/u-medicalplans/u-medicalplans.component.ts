import { Component, Input, OnInit } from '@angular/core';
import { MedicalplanService } from 'src/app/Services/medicalplan.service';

@Component({
  selector: 'app-u-medicalplans',
  templateUrl: './u-medicalplans.component.html',
  styleUrls: ['./u-medicalplans.component.css']
})
export class UMedicalplansComponent implements OnInit {

  medicalplans=[
    {
      insuranceId:"",
      insuranceName:"",
      insuranceDescription:"",
      insuranceType:"",
      premium:"",
      coverage:""
    }
  ]

  @Input() collapsed=false;
  @Input() screenwidth=0;


  constructor(private service:MedicalplanService) { }

  ngOnInit(): void {
    this.service.getmedicalplans().subscribe(
      (data:any)=>{
        this.medicalplans=data;
      },
      (error)=>{
        console.log(error);
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

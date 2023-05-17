import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DentalplanService } from 'src/app/Services/dentalplan.service';
import { MedicalplanService } from 'src/app/Services/medicalplan.service';
import { BuyplanformComponent } from '../buyplanform/buyplanform.component';

@Component({
  selector: 'app-buyplandata',
  templateUrl: './buyplandata.component.html',
  styleUrls: ['./buyplandata.component.css']
})
export class BuyplandataComponent implements OnInit {

  dentalplans=[
    {
      insuranceId:"",
      insuranceName:"",
      insuranceDescription:"",
      insuranceType:"",
      premium:"",
      coverage:""
    }
  ]

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

  constructor(private service:DentalplanService,private service2:MedicalplanService,private router:Router) { }
  buydentalplan(id:any){
    this.router.navigate(['/buyplan/buydental',id])
  }

  buymedicalplan(id:any){
    this.router.navigate(['/buyplan/buymedical',id])
  }
  ngOnInit(): void {

    this.service.getdentalplans().subscribe(
      (data:any)=>{
        this.dentalplans=data;
      },
      (error)=>{
        console.log(error);
      }
    )

    this.service2.getmedicalplans().subscribe(
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

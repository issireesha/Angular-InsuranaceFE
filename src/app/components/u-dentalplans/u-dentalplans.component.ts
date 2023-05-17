import { Component, Input, OnInit } from '@angular/core';
import { DentalplanService } from 'src/app/Services/dentalplan.service';

@Component({
  selector: 'app-u-dentalplans',
  templateUrl: './u-dentalplans.component.html',
  styleUrls: ['./u-dentalplans.component.css']
})
export class UDentalplansComponent implements OnInit {
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
  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor(private service:DentalplanService) { }

  ngOnInit(): void {
    this.service.getdentalplans().subscribe(
      (data:any)=>{
        this.dentalplans=data;
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

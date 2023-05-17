import { Component, Input, OnInit } from '@angular/core';
import { PendinginsuranceService } from 'src/app/Services/pendinginsurance.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

count:any="";
  constructor(private service:PendinginsuranceService) { }

  ngOnInit(): void {
    this.service.getPendingInsuranceCount().subscribe(
      (data:any)=>{
        this.count=data;
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

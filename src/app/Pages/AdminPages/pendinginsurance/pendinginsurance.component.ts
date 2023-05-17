import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-pendinginsurance',
  templateUrl: './pendinginsurance.component.html',
  styleUrls: ['./pendinginsurance.component.css']
})
export class PendinginsuranceComponent implements OnInit {

  title='sidenav';
  isSideNavCollapsed=false;
  screenwidth=0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle):void{
    this.screenwidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }

}

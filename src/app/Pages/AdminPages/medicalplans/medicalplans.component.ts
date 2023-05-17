import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-medicalplans',
  templateUrl: './medicalplans.component.html',
  styleUrls: ['./medicalplans.component.css']
})
export class MedicalplansComponent implements OnInit {

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

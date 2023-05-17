import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-viewsubmitted',
  templateUrl: './viewsubmitted.component.html',
  styleUrls: ['./viewsubmitted.component.css']
})
export class ViewsubmittedComponent implements OnInit {

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

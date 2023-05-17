import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-yourplans',
  templateUrl: './yourplans.component.html',
  styleUrls: ['./yourplans.component.css']
})
export class YourplansComponent implements OnInit {

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

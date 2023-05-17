import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

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

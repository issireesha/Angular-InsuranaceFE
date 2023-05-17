import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}


@Component({
  selector: 'app-editapplication',
  templateUrl: './editapplication.component.html',
  styleUrls: ['./editapplication.component.css']
})
export class EditapplicationComponent implements OnInit {

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

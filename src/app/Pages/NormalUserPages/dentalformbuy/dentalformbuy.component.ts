import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-dentalformbuy',
  templateUrl: './dentalformbuy.component.html',
  styleUrls: ['./dentalformbuy.component.css']
})
export class DentalformbuyComponent implements OnInit {

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

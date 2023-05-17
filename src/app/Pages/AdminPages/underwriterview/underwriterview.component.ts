import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-underwriterview',
  templateUrl: './underwriterview.component.html',
  styleUrls: ['./underwriterview.component.css']
})
export class UnderwriterviewComponent implements OnInit {

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

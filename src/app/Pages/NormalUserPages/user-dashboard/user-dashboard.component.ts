import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/Services/logout.service';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  title='sidenav';
  isSideNavCollapsed=false;
  screenwidth=0;
  constructor(private login:LogoutService,private router:Router) { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle):void{
    this.screenwidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
  Logout(){
    if(this.login.logout()){
      this.router.navigate(["login"]);
    }
  }

}

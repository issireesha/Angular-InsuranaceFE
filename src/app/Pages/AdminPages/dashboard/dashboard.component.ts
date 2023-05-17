import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { LogoutService } from 'src/app/Services/logout.service';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/Services/logout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-u-logout',
  templateUrl: './u-logout.component.html',
  styleUrls: ['./u-logout.component.css']
})
export class ULogoutComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;


  constructor(private service:LogoutService,private router:Router) { }

  ngOnInit(): void {
  }

  no(){
    this.router.navigate(['userdashboard']);
  }

  yes(){
    Swal.fire("Logging out","Click to log out","success").then(()=>{
      this.router.navigate(['login']);
      this.service.logout();
    })
   
  }

  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenwidth>768){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenwidth<=768 && this.screenwidth>0){
      styleClass='body-md-screen';
    }
    return styleClass;
  }

}

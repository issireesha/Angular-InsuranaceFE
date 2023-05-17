import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/Services/logout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogoutdata',
  templateUrl: './adminlogoutdata.component.html',
  styleUrls: ['./adminlogoutdata.component.css']
})
export class AdminlogoutdataComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor(private router:Router,private service:LogoutService) { }

  ngOnInit(): void {
    
  }

  no(){
    this.router.navigate(['admindashboard'])
  }

  yes(){
    Swal.fire("Almost there !","Logging out ....","success").then(()=>{
      this.router.navigate(['login'])
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

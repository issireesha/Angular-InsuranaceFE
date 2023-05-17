import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { navBardata } from './navData';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
            style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
            style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)',offset:'0'}),
          style({transform:'rotate(2turn)',offset:'1'}),
        ])
        )
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit {
  
  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  constructor(private logged:LoginService,private routea:Router) { }

  loggedIn=this.logged.IsLoggedIn;

  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }
  collapsed= false;
  screenWidth=0;
  navData=navBardata;
  toggleCollapse(){
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closesidenav(){
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  route(link:any){
    console.log(link)
    this.routea.navigate(link);
  }
}

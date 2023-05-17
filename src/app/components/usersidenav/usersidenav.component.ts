import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {unavBardata} from './userNavBardata';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css'],
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
export class UsersidenavComponent implements OnInit {

  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }
  collapsed= false;
  screenWidth=0;
  unavData=unavBardata;
  toggleCollapse(){
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  closesidenav(){
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

}

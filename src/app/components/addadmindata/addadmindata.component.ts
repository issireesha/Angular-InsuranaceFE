import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AddadminService } from 'src/app/Services/addadmin.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddadminformComponent } from '../addadminform/addadminform.component';
import { LoginService } from 'src/app/Services/login.service';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadmindata',
  templateUrl: './addadmindata.component.html',
  styleUrls: ['./addadmindata.component.css']
})
export class AddadmindataComponent implements OnInit {

  displayedColumns: any[]=[
    "email",
    "username",
    "role",
    "actions",
    
  ]

  @Input() collapsed=false;
  @Input() screenwidth=0;

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  admindata:any=[
    {
        email: "",
        password: "",
        role:"",
        enabled:""
    }, 
  ]
email2:any="";
listData!:MatTableDataSource<any>;

deleteadmin(temail:any){
  this.admindata=temail;
  this.email2=this.admindata.email;
  this.service2.deleteadmin(this.email2).subscribe(
    (data)=>{
      // this.snack.open("Deleted sucessfully!","Dismiss",{
      //   duration:3000
      // })
      Swal.fire("Success","Admin Deleted Successfully !","success").then(()=>{
        window.location.reload();
      })
    },
    (error)=>{
      this.snack.open("Something went wrong !","Dismiss",{
        duration:3000
      })
    }
  )
}
  constructor(private service:AddadminService,private snack:MatSnackBar,private dialog:MatDialog,private service2:UserserviceService) { }

  addnewadmin(){
    this.dialog.open(AddadminformComponent,{
      position:{
        top:"50vh",
        left:"50vh"
      }
    });
  }

  ngOnInit(): void {
    this.service.getalladmin().subscribe(
      (data:any)=>{ 
         this.admindata=data;
        console.log(this.admindata)
        // console.log(this.admindata.authorities);
        // this.filteredadmindata.email=this.admindata.email;
        // this.filteredadmindata.username=this.admindata.username;
        // console.log(this.admindata.authorities[0].authority)      
        this.listData=new MatTableDataSource(data);
        this.listData.sort=this.sort;
        this.listData.paginator=this.paginator;
      },
      (error)=>{
        console.log(error);
          this.snack.open("Error in loading data","Dismiss",{
            duration:5000
          });
      }
    )

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

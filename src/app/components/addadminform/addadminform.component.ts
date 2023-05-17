import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadminform',
  templateUrl: './addadminform.component.html',
  styleUrls: ['./addadminform.component.css']
})
export class AddadminformComponent implements OnInit {

  admindata={
    email:"",
    password:""
  }
  addnewadmin(){
    if(this.admindata.email==null || this.admindata.email.trim()==null){
        this.snack.open("Email cannot be empty","Dismiss",{
          duration:2000
        })
    }else if(this.admindata.password==null || this.admindata.password.trim()==null){
      this.snack.open("Password cannot be empty","Dismiss",{
        duration:2000
      })
  }else{
      this.service.addadmin(this.admindata).subscribe(
        (data:any)=>{
          this.admindata=data;
          if(this.admindata.email!=null && this.admindata.password!=null){
            // this.snack.open("Admin added sucessfully","Dismiss",{
            //   duration:2000
            // })
            Swal.fire("Success","Admin added successfully !","success").then(()=>{
              window.location.reload();
            })
          }
        },
        (error)=>{
          this.snack.open("User with this email already exists","Dismiss",{
            duration:5000
          })
        }
      )
  }
  }
  constructor(private snack:MatSnackBar,private service:UserserviceService) { }

  ngOnInit(): void {
  }

}

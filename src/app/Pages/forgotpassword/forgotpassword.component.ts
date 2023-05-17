import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { LogoutService } from 'src/app/Services/logout.service';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user_data={
    email:"",
    password:"",
    confirmpassword:""
  }

  final_user_data={
    email:"",
    password:""
  }
  constructor(private snack:MatSnackBar,private service:UserserviceService,private router:Router,
    private logout:LogoutService) { }

  ngOnInit(): void {
  }
  
  changePassword(){
    if(this.user_data.email==null || this.user_data.email==""){
        this.snack.open("Email cannot be empty","Dismiss",{
          duration:2000
        });
        return;
    }else if(this.user_data.password==null || this.user_data.password==""){
      this.snack.open("Password cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.user_data.confirmpassword==null || this.user_data.confirmpassword==""){
      this.snack.open("Confirm password cannot be empty","Dismiss",{
        duration:2000
      });
    }else if(this.user_data.password!=this.user_data.confirmpassword){
        this.snack.open("Passwords does'nt Match!","Dismiss",{
          duration:2000
        });
    }else{
      this.final_user_data.email=this.user_data.email;
      this.final_user_data.password=this.user_data.password;
    this.service.changepassword(this.final_user_data).subscribe(
      (data)=>{
        // this.snack.open("Done","Dismiss",{
        //   duration:2000
        // });
        Swal.fire("Success","Password updated successfully !","success").then(()=>{
          this.router.navigate(['login'])
          this.logout.logout();

        })
      },
      (error)=>{
        this.snack.open("Invalid Email id","Dismiss");
      }
    )
    }
  }
}

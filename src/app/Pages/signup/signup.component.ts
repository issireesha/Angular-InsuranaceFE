import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user_data={
    email:'',
    password:''
  }
  constructor(private userservice:UserserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  //Add user
  adduser(){
    if(this.user_data.email==null || this.user_data.email==""){
        this.snack.open("email cannot be empty!","Dismiss",{
          duration:2000
        });
        return;
    }else if(this.user_data.password==null || this.user_data.password==""){
      this.snack.open("Password field cannot be empty!","Dismiss",{
        duration:2000
      });
      return;
    }
    this.userservice.adduser(this.user_data).subscribe(
      (data)=>{
        console.log(this.user_data);
       Swal.fire('Well done','Registered Sucessfully','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Oops..','User with this email already exists!','error');
      }
      );
  }

  //Validation

}

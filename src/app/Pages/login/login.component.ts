import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router,
    private service:UserserviceService) { }


  public user={
    email:'',
    password:''
  }
 public temp={
  status:"",
 }
  
  public bool:string="";
  ngOnInit(): void {
  }
  LoginFormSubmit(){
    if(this.user.email.trim()=="" || this.user.email==null){
        this.snack.open("Email cannot be empty!","Dismiss",{
          duration:2000,
        });
        return;
    }else if(this.user.password.trim()=="" ||this.user.password==null){
      this.snack.open("Password cannot be empty!","Dismiss",{
        duration:2000,
      });
      return;
    }

    this.login.generateToken(this.user).subscribe(
      (data:any)=>{

        //login user
        this.login.loginUser(data);
        this.checkpassword();
        //set user
        
      },
      (error)=>{
        console.log(error);
        console.log("Error!")
        this.snack.open("Invalid Credentials","Dismiss",{
          duration:4000
        });

      }
    );

    }
    
    public checkpassword(){
      let bool2="";
      this.login.getpassword(this.user.email,this.user.password).subscribe(
        (data2:any)=>{
          this.temp=data2;
          if(JSON.stringify(this.temp.status)=='true'){
            this.login.getCurrentUser().subscribe(
              (currentuser:any)=>{
                this.login.setUser(currentuser);
                if(this.login.getUserRole()=='ADMIN'){
                  Swal.fire('Almost there !','Logging In...','success').then(() =>{
                    this.router.navigate(['admindashboard']);
                  })
                }else if(this.login.getUserRole()=='NORMAL')
                {
                  Swal.fire("Almost there !","Logging In","success").then(()=>{
                    this.router.navigate(['userdashboard']);
                  })
                }else{
                  this.login.logout();
                  location.reload();
                }
              }
            )
          }else{
            this.snack.open("Invalid Email and password !","Dismiss",{
              duration:5000
            })
          }
        },
        (error)=>{
            this.snack.open("Something went wrong try again !","Dismiss",{
              duration:5000
            })
        } 
      )
      console.log(this.temp);
    }
  
}

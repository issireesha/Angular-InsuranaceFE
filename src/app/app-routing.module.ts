import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Pages/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { DashboardComponent } from './Pages/AdminPages/dashboard/dashboard.component';
import { UserDashboardComponent } from './Pages/NormalUserPages/user-dashboard/user-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';
import { AdminsettingsComponent } from './Pages/AdminPages/adminsettings/adminsettings.component';
import { DashboarddataComponent } from './Pages/AdminPages/dashboarddata/dashboarddata.component';
import { UsersettingsdataComponent } from './components/usersettingsdata/usersettingsdata.component';
import { UsersettingsComponent } from './Pages/NormalUserPages/usersettings/usersettings.component';
import { DentalplansComponent } from './Pages/AdminPages/dentalplans/dentalplans.component';
import { MedicalplansComponent } from './Pages/AdminPages/medicalplans/medicalplans.component';
import { PendinginsuranceComponent } from './Pages/AdminPages/pendinginsurance/pendinginsurance.component';
import { AddadminComponent } from './Pages/AdminPages/addadmin/addadmin.component';
import { UserdentalplansComponent } from './Pages/NormalUserPages/userdentalplans/userdentalplans.component';
import { UsermedicalplansComponent } from './Pages/NormalUserPages/usermedicalplans/usermedicalplans.component';
import { YourplansComponent } from './Pages/NormalUserPages/yourplans/yourplans.component';
import { BuyplanComponent } from './Pages/NormalUserPages/buyplan/buyplan.component';
import { LogoutComponent } from './Pages/NormalUserPages/logout/logout.component';
import { AdminlogoutComponent } from './Pages/AdminPages/adminlogout/adminlogout.component';
import { UserpendingInsuranceComponent } from './Pages/NormalUserPages/userpending-insurance/userpending-insurance.component';
import { AdddentalplanformComponent } from './components/adddentalplanform/adddentalplanform.component';
import { AddadminformComponent } from './components/addadminform/addadminform.component';
import { BuyplanformComponent } from './components/buyplanform/buyplanform.component';
import { DentalformbuyComponent } from './Pages/NormalUserPages/dentalformbuy/dentalformbuy.component';
import { MedicalformbuyComponent } from './Pages/NormalUserPages/medicalformbuy/medicalformbuy.component';
import { UnderwriterviewComponent } from './Pages/AdminPages/underwriterview/underwriterview.component';
import { AdminfeedbackdialogComponent } from './components/adminfeedbackdialog/adminfeedbackdialog.component';
import { EditapplicationComponent } from './Pages/NormalUserPages/editapplication/editapplication.component';
import { ViewsubmittedComponent } from './Pages/NormalUserPages/viewsubmitted/viewsubmitted.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },{
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"forgotpassword",
    component:ForgotpasswordComponent,
    pathMatch:"full"
  },{
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },{
    path:"admindashboard",
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
        {
          path:"",
          component:DashboardComponent,
        }
        
      ]},{
        path:"admindashboard/adminsettings",
        component:AdminsettingsComponent,
        canActivate:[AdminGuard],
      },
      {
        path:"admindashboard/dentalplans",
        component:DentalplansComponent,
        canActivate:[AdminGuard],
      },
      {
        path:"admindashboard/medicalplans",
        component:MedicalplansComponent,
        canActivate:[AdminGuard],
      },
      {
        path:"admindashboard/pendinginsurances",
        component:PendinginsuranceComponent,
        canActivate:[AdminGuard],
      },
      {
        path:"admindashboard/addadmin",
        component:AddadminComponent,
        canActivate:[AdminGuard],
      },
      {
        path:"admindashboard/adminlogout",
        component:AdminlogoutComponent,
        canActivate:[AdminGuard],
      },
      {
    path:"userdashboard",
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:"",
        component:UserDashboardComponent
      }
  ]},
  {
    path:"userdashboard/usersettings",
    component:UsersettingsComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdashboard/userDentalPlans",
    component:UserdentalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdashboard/userMedicalPlans",
    component:UsermedicalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdashboard/yourplans",
    component:YourplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdashboard/buyplan",
    component:BuyplanComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdashboard/userlogout",
    component:LogoutComponent,
    canActivate:[AdminGuard],
  },{
    path:"dentalplans",
    component:DentalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"logout",
    component:AdminlogoutComponent,
    canActivate:[AdminGuard],
  },{
    path:"settings",
    component:AdminsettingsComponent,
    canActivate:[AdminGuard],
  },{
    path:"pendinginsurances",
    component:PendinginsuranceComponent,
    canActivate:[AdminGuard],
  },{
    path:"addadmin",
    component:AddadminComponent,
    canActivate:[AdminGuard],
  },{
    path:"medicalplans",
    component:MedicalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"userdentalplans",
    component:UserdentalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"usermedicalplans",
    component:UsermedicalplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"renewinsurance",
    component:YourplansComponent,
    canActivate:[AdminGuard],
  },{
    path:"userpendinginsurance",
    component:UserpendingInsuranceComponent,
    canActivate:[AdminGuard]
  },{
    path:"dentalform",
    component:AdddentalplanformComponent,
    canActivate:[AdminGuard],
  },{
    path:"adminform",
    component:AddadminformComponent,
    canActivate:[AdminGuard],
  },{
    path:"buyplanform",
    component:BuyplanformComponent,
    canActivate:[AdminGuard],
  },{
    path:"buyplan/buydental/:id",
    component:DentalformbuyComponent,
    canActivate:[AdminGuard],
  },{
    path:"buyplan/buymedical/:id",
    component:MedicalformbuyComponent,
    canActivate:[AdminGuard],
  },{
    path:"pendinginsurances/underwriter/:id",
    component:UnderwriterviewComponent,
    canActivate:[AdminGuard],
  },{
    path:"dummy",
    component:AdminfeedbackdialogComponent,
    canActivate:[AdminGuard],
  },{
    path:"userpendinginsurance/edit/:id",
    component:EditapplicationComponent,
    canActivate:[AdminGuard],
  },
  {
    path:"yourplans/viewapplication/:id",
    component:ViewsubmittedComponent,
    canActivate:[AdminGuard],
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AdminGuard,UserGuard]
})


export class AppRoutingModule { }

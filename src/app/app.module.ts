import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ForgotpasswordComponent } from './Pages/forgotpassword/forgotpassword.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptorProviders } from './Services/AuthInterceptor';
import { DashboardComponent } from './Pages/AdminPages/dashboard/dashboard.component';
import { UserDashboardComponent } from './Pages/NormalUserPages/user-dashboard/user-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { AdminsettingsComponent } from './Pages/AdminPages/adminsettings/adminsettings.component';
import { DashboarddataComponent } from './Pages/AdminPages/dashboarddata/dashboarddata.component';
import { SettingsdataComponent } from './components/settingsdata/settingsdata.component';
import { UsersettingsComponent } from './Pages/NormalUserPages/usersettings/usersettings.component';
import { UserdashboarddataComponent } from './Pages/NormalUserPages/userdashboarddata/userdashboarddata.component';
import { UsersettingsdataComponent } from './components/usersettingsdata/usersettingsdata.component';
import { UsersidenavComponent } from './components/usersidenav/usersidenav.component';
import { DentalplansComponent } from './Pages/AdminPages/dentalplans/dentalplans.component';
import { MedicalplansComponent } from './Pages/AdminPages/medicalplans/medicalplans.component';
import { PendinginsuranceComponent } from './Pages/AdminPages/pendinginsurance/pendinginsurance.component';
import { AddadminComponent } from './Pages/AdminPages/addadmin/addadmin.component';
import { UserdentalplansComponent } from './Pages/NormalUserPages/userdentalplans/userdentalplans.component';
import { UsermedicalplansComponent } from './Pages/NormalUserPages/usermedicalplans/usermedicalplans.component';
import { YourplansComponent } from './Pages/NormalUserPages/yourplans/yourplans.component';
import { BuyplanComponent } from './Pages/NormalUserPages/buyplan/buyplan.component';
import { LogoutComponent } from './Pages/NormalUserPages/logout/logout.component';
import { AddadmindataComponent } from './components/addadmindata/addadmindata.component';
import { DentalplansdataComponent } from './components/dentalplansdata/dentalplansdata.component';
import { MedicalplandataComponent } from './components/medicalplandata/medicalplandata.component';
import { APendingDataComponent } from './components/a-pending-data/a-pending-data.component';
import { BuyplandataComponent } from './components/buyplandata/buyplandata.component';
import { ULogoutComponent } from './components/u-logout/u-logout.component';
import { UDentalplansComponent } from './components/u-dentalplans/u-dentalplans.component';
import { UMedicalplansComponent } from './components/u-medicalplans/u-medicalplans.component';
import { UYourplansComponent } from './components/u-yourplans/u-yourplans.component';
import { AdminlogoutdataComponent } from './components/adminlogoutdata/adminlogoutdata.component';
import { AdminlogoutComponent } from './Pages/AdminPages/adminlogout/adminlogout.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UserpendingInsuranceComponent } from './Pages/NormalUserPages/userpending-insurance/userpending-insurance.component';
import { UserpendingdataComponent } from './components/userpendingdata/userpendingdata.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdddentalplanformComponent } from './components/adddentalplanform/adddentalplanform.component';
import {MatSelectModule} from '@angular/material/select';
import { AddmedicalplanformComponent } from './components/addmedicalplanform/addmedicalplanform.component';
import { AddadminformComponent } from './components/addadminform/addadminform.component';
import { UpdatedentalplansformComponent } from './components/updatedentalplansform/updatedentalplansform.component';
import { UpdatemedicalplanformComponent } from './components/updatemedicalplanform/updatemedicalplanform.component';
import { BuyplanformComponent } from './components/buyplanform/buyplanform.component';
import { DentalformbuyComponent } from './Pages/NormalUserPages/dentalformbuy/dentalformbuy.component';
import { MedicalformbuyComponent } from './Pages/NormalUserPages/medicalformbuy/medicalformbuy.component';
import { BuymedicalformComponent } from './components/buymedicalform/buymedicalform.component';
import { UnderwriterviewComponent } from './Pages/AdminPages/underwriterview/underwriterview.component';
import { UnderwriterdataComponent } from './components/underwriterdata/underwriterdata.component';
import { AdminfeedbackdialogComponent } from './components/adminfeedbackdialog/adminfeedbackdialog.component';
import { UserfeedbackdialogComponent } from './components/userfeedbackdialog/userfeedbackdialog.component';
import { EditapplicationComponent } from './Pages/NormalUserPages/editapplication/editapplication.component';
import { EditapplicationdataComponent } from './components/editapplicationdata/editapplicationdata.component';
import { TypeComponent } from './components/type/type.component';
import { ViewsubmittedapplicationComponent } from './components/viewsubmittedapplication/viewsubmittedapplication.component';
import { ViewsubmittedComponent } from './Pages/NormalUserPages/viewsubmitted/viewsubmitted.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgotpasswordComponent,
    SignupComponent,
    UserDashboardComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    AdminsettingsComponent,
    DashboarddataComponent,
    SettingsdataComponent,
    UsersettingsComponent,
    UserdashboarddataComponent,
    UsersettingsdataComponent,
    UsersidenavComponent,
    DentalplansComponent,
    MedicalplansComponent,
    PendinginsuranceComponent,
    AddadminComponent,
    UserdentalplansComponent,
    UsermedicalplansComponent,
    YourplansComponent,
    BuyplanComponent,
    LogoutComponent,
    AddadmindataComponent,
    DentalplansdataComponent,
    MedicalplandataComponent,
    APendingDataComponent,
    BuyplandataComponent,
    ULogoutComponent,
    UDentalplansComponent,
    UMedicalplansComponent,
    UYourplansComponent,
    AdminlogoutdataComponent,
    AdminlogoutComponent,
    UserpendingInsuranceComponent,
    UserpendingdataComponent,
    AdddentalplanformComponent,
    AddmedicalplanformComponent,
    AddadminformComponent,
    UpdatedentalplansformComponent,
    UpdatemedicalplanformComponent,
    BuyplanformComponent,
    DentalformbuyComponent,
    MedicalformbuyComponent,
    BuymedicalformComponent,
    UnderwriterviewComponent,
    UnderwriterdataComponent,
    AdminfeedbackdialogComponent,
    UserfeedbackdialogComponent,
    EditapplicationComponent,
    EditapplicationdataComponent,
    TypeComponent,
    ViewsubmittedapplicationComponent,
    ViewsubmittedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [AuthInterceptorProviders,AdminGuard,UserGuard],
  bootstrap: [AppComponent],
  entryComponents:[AdddentalplanformComponent,AddmedicalplanformComponent,AddadminformComponent,BuyplanformComponent],
})
export class AppModule { }

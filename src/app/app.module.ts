import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { HospitalComponent } from './hospital/hospital.component';


const allLinks:Routes = [
  {path:'register',component:RegisterComponent},
  {path:'appontmenthistory',component:AppointmentHistoryComponent},
  {path:'viewhospital',component:HospitalComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewPatientComponent,
    AppointmentHistoryComponent,
    HospitalComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

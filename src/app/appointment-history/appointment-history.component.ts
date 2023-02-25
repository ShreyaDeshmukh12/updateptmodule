import { Component } from '@angular/core';
import { PatientDTO } from '../patient-dto';
import { PatientOperationsService } from '../patient-operations.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {

  allPatients:PatientDTO[]=[];

  constructor(private patientService:PatientOperationsService)
  {

  }

getPatients4(username:string){
  this.patientService.getAppointmentHistoryByUsername(username).subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allPatients = data;
    },err=>{
      console.log("error from spring ",err);


    } 
  );
}

}

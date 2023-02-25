import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalDto} from '../hospital-dto';
import { PatientOperationsService } from '../patient-operations.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {

  allHospital:HospitalDto[]=[];
  constructor (private patientService:PatientOperationsService, private router:Router){

  }

  getAllHospitals(){ 
    this.allHospital=[];
   this.patientService.getAllHospital().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHospital = data;
    },err=>{
      console.log("error from spring ",err);

    }
  );
  }

  movetoPage1(){
    this.router.navigate(['search']);
  }



}

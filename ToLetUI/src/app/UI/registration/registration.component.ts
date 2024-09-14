import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { RegistrationModel } from 'src/app/Models/registration-model.model';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(public resService:RegistrationService) { }

  ngOnInit(): void {
    this.resService.refreshList();
  }
  populatedForm(selectedRecord:RegistrationModel){
    this.resService.formData=Object.assign({},selectedRecord);

  }
  onDelete(id:number){
try {
  this.resService.deleteRegistration(id).subscribe(
    resquest=>{
      this.resService.refreshList();
    },
    err=>{
      console.log(err);
    }
  )
} catch (error) {
 console.log(error);
}
  }

}

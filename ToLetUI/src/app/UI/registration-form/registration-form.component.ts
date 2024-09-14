import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationModel} from 'src/app/Models/registration-model.model';
import { CountryServiceService } from 'src/app/Services/country-service.service';
import { RegistrationService} from 'src/app/Services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})
export class RegistrationFormComponent implements OnInit {

  constructor(public resService: RegistrationService,public countryService:CountryServiceService) {}

  ngOnInit(): void {
    //this.resetForm()
    this.countryService.refreshList();
  }
  onSubmit(form: NgForm) {
    this.saveData(form);
  }
  saveData(form: NgForm) {
    if (this.resService.formData.id == 0) {
      this.insertData(form);
    } else {
      this.updateData(form);
    }
  }
  insertData(form: NgForm) {
    this.resService.postRegistration().subscribe(
      res => {
        this.resService.refreshList();
        this.resetForm(form);
      }
    )
  }
  updateData(form: NgForm) {
    this.resService.putRegistration().subscribe(
      request => {
        this.resetForm(form);
        this.resService.refreshList();
      }
    )
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.resService.formData = new RegistrationModel();
  }
}

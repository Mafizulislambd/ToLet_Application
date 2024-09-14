import { Component, OnInit } from '@angular/core';
import { FormControlDirective, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { CountryModel } from 'src/app/Models/country-model.model';
import { CountryServiceService } from 'src/app/Services/country-service.service';

@Component({
  selector: 'app-country-details-form',
  templateUrl: './country-details-form.component.html',
  styles: [
  ]
})
export class CountryDetailsFormComponent implements OnInit {

  constructor(public countryService:CountryServiceService) { }

  ngOnInit(): void {

  }
  resetForm(form:NgForm){
    form.form.reset();
    this.countryService.formData=new CountryModel();
    
  }
  onSubmit(form:NgForm){

    if(this.countryService.formData.countryId==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
   
  }
  insertRecord(form:NgForm){

    this.countryService.postCountry().subscribe(
  
      res=>{
        
        this.resetForm(form);
        alert("Data Save Successfully");
        console.log("Data Save Successfully");
        this.countryService.refreshList();
      }
    )
  }
  updateRecord(form:NgForm){
    this.countryService.putCountry().subscribe(
      res=>{
        this.resetForm(form);
        console.log("Update Successfully");
        alert("Update Successfully");
        this.countryService.refreshList();
      }
    )

  }
  onDelete(id:number){
    this.countryService.deleteCountry(id).subscribe(
      res=>{
        this.countryService.refreshList()
      },
      err=>{
        console.log(err)
      }
    )
  }

}

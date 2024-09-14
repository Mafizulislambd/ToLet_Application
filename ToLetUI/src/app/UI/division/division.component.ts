import { Component, OnInit } from '@angular/core';
import { FormControlDirective, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { CountryModel } from 'src/app/Models/country-model.model';
import { DivisonModel } from 'src/app/Models/divison-model.model';
import { CountryServiceService } from 'src/app/Services/country-service.service';
import { DivisonService } from 'src/app/Services/divison.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styles: [
  ]
})
export class DivisionComponent implements OnInit {

  constructor(public divisionService:DivisonService) { }

  ngOnInit(): void {
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.divisionService.formData=new DivisonModel();
    
  }
  onSubmit(form:NgForm){

    if(this.divisionService.formData.divisionId==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
   
  }
  insertRecords(form:NgForm){

    this.divisionService.postDivision().subscribe(
  
      res=>{
        this.resetForm(form);
        this.divisionService.refreshList();
      }
    )
  }
  insertRecord(form:NgForm){

    this.divisionService.postDivision().subscribe(
  
      res=>{
        
        this.resetForm(form);
        this.divisionService.refreshList();
      }
    )
  }
  updateRecord(form:NgForm){
    this.divisionService.putDivision().subscribe(
      res=>{
        this.resetForm(form);
        this.divisionService.refreshList();
      }
    )

  }
}

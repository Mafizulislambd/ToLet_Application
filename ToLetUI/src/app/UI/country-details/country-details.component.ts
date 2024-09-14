import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/Models/country-model.model';
import { CountryServiceService } from 'src/app/Services/country-service.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [
  ]
})
export class CountryDetailsComponent implements OnInit {

  constructor(public countryService:CountryServiceService) { }

  ngOnInit(): void {
    this.countryService.refreshList();
  }

  populateForm(selectedRecord:CountryModel) {
    this.countryService.formData = Object.assign({}, selectedRecord);
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
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;
  myClickFunction(event:any) { 
    //just added console.log which will display the event details in browser on click of the button.
    this.isavailable = false;
    //console.log(event);
  }
  changemonths(event:any) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
}

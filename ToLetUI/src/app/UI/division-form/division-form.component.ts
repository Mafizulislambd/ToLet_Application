import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DivisonModel } from 'src/app/Models/divison-model.model';
import { DivisonService } from 'src/app/Services/divison.service';

@Component({
  selector: 'app-division-form',
  templateUrl: './division-form.component.html',
  styles: [
  ]
})
export class DivisionFormComponent implements OnInit {

  constructor(public service:DivisonService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:DivisonModel){
    this.service.formData=Object.assign({},selectedRecord)
  }
  onDelete(id:number){
    this.service.deleteDivion(id).subscribe(
      res=>{
        this.service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }
}

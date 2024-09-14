import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from '../ApiService/api-service.service';
import { RegistrationModel } from '../Models/registration-model.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  list!:RegistrationModel[];
  formData: RegistrationModel=new RegistrationModel()
    constructor(private ResService:ApiServiceService, private http:HttpClient) { }
  postRegistration(){
    return this.http.post(this.ResService.baseRegistrationURL,this.formData);
  }
  putRegistration(){
    return this.http.put(`${this.ResService.baseRegistrationURL}/${this.formData.id}`,this.formData);
  }
  deleteRegistration(id:number){
    return this.http.delete(`${this.ResService.baseRegistrationURL}/${id}`);

  }
  refreshList(){
     this.http.get(this.ResService.baseRegistrationURL).toPromise().then(
      res=>this.list=res as RegistrationModel[]
     );
  }
}

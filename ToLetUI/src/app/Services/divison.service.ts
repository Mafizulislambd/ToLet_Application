import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../ApiService/api-service.service';
import { DivisonModel } from '../Models/divison-model.model';

@Injectable({
  providedIn: 'root'
})
export class DivisonService {
formData:DivisonModel=new DivisonModel();
  constructor(public service:ApiServiceService,private http:HttpClient) { }
  readonly baseURL=this.service.baseDivisionURL;
  list!:DivisonModel[];
  refreshList(){
    this.http.get(this.baseURL).toPromise().then(
      res=>this.list = res as DivisonModel[]
    );
  }
  postDivisions(){
   return this.http.post(this.baseURL,this.formData);
  }
  postDivision(){
    return this.http.post(this.baseURL,this.formData);
  }
  putDivision(){
    return this.http.put(`${this.baseURL}/${this.formData.divisionId}`,this.formData);
  }
  deleteDivion(id:number){
   return this.http.delete(`${this.baseURL}/${id}`);
  }
}

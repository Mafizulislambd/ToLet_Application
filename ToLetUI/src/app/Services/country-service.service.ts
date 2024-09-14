import { Injectable } from '@angular/core';
import { ApiServiceService } from '../ApiService/api-service.service';
import { CountryModel } from '../Models/country-model.model';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  formData:CountryModel=new CountryModel();

  readonly  baseURL=this.apiService.baseCountryURL;
  list!:CountryModel[];
  constructor(private http:HttpClient,private apiService :ApiServiceService) { }
  postCountry(){
    return this.http.post(this.baseURL,this.formData);
  }
  putCountry(){
   return this.http.put(`${this.baseURL}/${this.formData.countryId}`,this.formData);
  }
  deleteCountry(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CountryModel[]);
  }
}

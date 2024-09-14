import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
readonly baseCountryURL='http://localhost:5034/api/Country';
readonly baseDivisionURL='http://localhost:5034/api/Divisions';
readonly baseRegistrationURL='http://localhost:5034/api/registrationmodel'
  constructor() { }
}

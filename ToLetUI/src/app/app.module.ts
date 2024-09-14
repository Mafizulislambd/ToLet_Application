import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailsFormComponent } from './UI/country-details-form/country-details-form.component';
import { CountryDetailsComponent } from './UI/country-details/country-details.component';
import { HomeUIComponent } from './Home/home-ui/home-ui.component';
import { DivisionComponent } from './UI/division/division.component';
import { DivisionFormComponent } from './UI/division-form/division-form.component';
import { DivisonService } from './Services/divison.service';
import { CountryServiceService } from './Services/country-service.service';
import { RegistrationFormComponent } from './UI/registration-form/registration-form.component';
import { RegistrationComponent } from './UI/registration/registration.component';
import { LoginComponent } from './UI/login/login.component';
import { TestingUIComponent } from './UI/testing-ui/testing-ui.component';
import { Observable } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountryDetailsFormComponent,
    HomeUIComponent,
    DivisionComponent,
    DivisionFormComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    LoginComponent,
    TestingUIComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
      {
        path: 'Country',
        component: CountryDetailsComponent
      },
      {
        path: 'Country-info',
        component: CountryDetailsFormComponent
      }
      ,
      {
        path: 'Divison',
        component: DivisionComponent
      },
      {
        path: 'Registration',
        component:RegistrationComponent
      },
      {
        path: 'RegistrationForm',
        component:RegistrationFormComponent
      }, {
        path: 'Login',
        component:LoginComponent
      },
      {
        path: 'Test',
        component:TestingUIComponent
      },
      
      
      
    ])
  ],
  providers: [CountryServiceService,DivisonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

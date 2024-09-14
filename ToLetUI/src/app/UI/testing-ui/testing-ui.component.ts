import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validator,FormBuilder} from '@angular/forms';
import { Route } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-testing-ui',
  templateUrl: './testing-ui.component.html',
  styles: [
  ]
})
export class TestingUIComponent implements OnInit {

  userName: string='';
  password: string='';
  formData: FormGroup;

  constructor(private authService:AuthServiceService,  private router : AppRoutingModule) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

  onClickSubmit(data: any) {
     this.userName = data.userName;
     this.password = data.password;

     console.log("Login page: " + this.userName);
     console.log("Login page: " + this.password);

     this.authService.login(this.userName, this.password)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
     
       //  if(data) this.router.navigate(['/expenses']); 
     });
  }
  
}

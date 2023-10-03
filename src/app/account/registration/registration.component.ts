import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  regForm : FormGroup ;
  datasaved = false;
  massage? : string ;
  constructor(private fb: FormBuilder, private accountservice: AccountserviceService) {
    this.regForm = this.fb.group({
      Name: [''],
     Email: [''],
     Password: ['']
   })
  }
   
 
   onSubmit() {
    
    let userinfo = this.regForm.value;
//console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.regForm.reset();
      }
    )
  }
}

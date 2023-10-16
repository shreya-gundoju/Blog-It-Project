import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import {Userloginfo} from '../userloginfo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  datasaved = false;
  message?: string;
  status?:string;
  submitted = false;
  loading = false;
 
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { 
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
   
  }
 
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe(
      (resResult: Userloginfo) => {
       let resp=JSON.stringify(resResult);
       console.log(resp);
        this.datasaved = true;
        this.message = 'msg';
        this.status = 'status';
        if(status=='success'){
        localStorage.setItem('Loginuser',resp)
        }else{
          localStorage.removeItem('Loginuser');
        }
        this.loading = false;
       this.loginForm.reset();
      }
    )
  }
 
}

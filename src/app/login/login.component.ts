import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localStoreData: any
  localStoreDataJSONform: any
  localStoreEmails: any;
  localStorePswd: any
  myPassword: any
  show_pswd:boolean=false;
  myLoginValue:any;
  toShowProducts:boolean=false;


  constructor( private myroute:Router) {
    // localStorage.getItem('userDetails')
  }

  ngOnInit(): void {
    this.localStoreData = localStorage.getItem('userDetails')
    this.localStoreDataJSONform = JSON.parse(this.localStoreData)
    if (this.localStoreDataJSONform) {
      this.localStoreEmails = this.localStoreDataJSONform.map( (each: any) => `${each.useremail}`)
    }
    if (this.localStoreDataJSONform) {
      this.localStorePswd = this.localStoreDataJSONform.map((each: any) => `${each.userpswd}`)
    }
  }

  loginForm = new FormGroup({
    login_email: new FormControl('', [Validators.required]),
    login_password: new FormControl("", [Validators.required])
  })

  get login_email() {
    return this.loginForm.get('login_email')
  }
  get login_password() {
    return this.loginForm.get('login_password')
  }
showPswd(){
  this.show_pswd=!this.show_pswd
}
  login() {

    // console.log(this.loginForm.get('login_email')?.value);
    // console.log(this.loginForm.get('login_password')?.value);
    // console.log(this.localStoreEmails);
    // console.log(this.localStorePswd);

if(this.localStoreData){

  for (let i = 0; i < this.localStoreEmails.length; i++) {
    if (this.loginForm.get('login_email')?.value === this.localStoreEmails[i]) {
      console.log("Hey matched mail is", this.localStoreEmails[i], "password is", this.localStorePswd[i]);
      this.myPassword = this.localStorePswd[i];
      console.log(this.localStoreEmails[i]);

      if (this.loginForm.get('login_password')?.value === this.myPassword) {
        // console.log("Password matched");
        Swal.fire({
          icon: 'success',
          titleText: 'All details are correct'
        })
        this.myLoginValue = 1
        sessionStorage.setItem('loggedin', this.myLoginValue);
        this.toShowProducts = false;
        // below line is used to navigartte to products page after user login
        // for this we have to import Router and inject in constractor.
        this.myroute.navigate(['products'])
        break;
      }
      else {
        // console.log("password not matched");
        Swal.fire({
          icon: 'error',
          titleText: ' Please enter valid Password'
        })
        break;
      }
    }

    else {
      // console.log("email is not exist");
      Swal.fire({
        icon: 'warning',
        titleText: 'Please Provide valid email or password'
      });
      
    }

  }


}

else{
  Swal.fire({
    icon:'error',
    title:'Seems like you do not have an account',
    titleText:"Please sigh up first "
    
    
  })
}
    
}



}

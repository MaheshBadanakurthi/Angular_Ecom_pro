import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
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

  constructor() {
    // localStorage.getItem('userDetails')
  }

  ngOnInit(): void {
    this.localStoreData = localStorage.getItem('userDetails')
    this.localStoreDataJSONform = JSON.parse(this.localStoreData)
    if (this.localStoreDataJSONform) {
      this.localStoreEmails = this.localStoreDataJSONform.map((each: any) => `${each.useremail}`)
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
    console.log(this.loginForm.get('login_email')?.value);
    console.log(this.loginForm.get('login_password')?.value);
    console.log(this.localStoreEmails);
    console.log(this.localStorePswd);

    for (let i = 0; i < this.localStoreEmails.length; i++) {
      if (this.loginForm.get('login_email')?.value === this.localStoreEmails[i]) {
        console.log("Hey matched mail is", this.localStoreEmails[i], "password is", this.localStorePswd[i]);
        this.myPassword = this.localStorePswd[i];
        console.log(this.localStoreEmails[i]);
        
        if (this.loginForm.get('login_password')?.value === this.myPassword) {
          console.log("Password matched");
          Swal.fire({
            icon: 'success',
            titleText: 'All details are correct'
          })
        }
        else {
          console.log("password not matched");
          Swal.fire({
            icon: 'error',
            titleText: ' Please enter valid Password'
          })
        }
      }

      else {
        console.log("email is not exist");

        // Swal.fire({
        //   icon: 'warning',
        //   titleText: 'Please Provide valid email or password'
        // })
      }

    }

    // if(this.loginForm.get('login_email')?.value==this.localStoreEmails){
    //   // Swal.fire({
    //   //   icon:'error',
    //   //   titleText:'Credential are does not exist'

    //   // })
    // }

  }
}

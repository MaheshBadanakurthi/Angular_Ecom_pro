import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private myrout:Router){  }
  ngOnInit(): void {

  }
  userName: any;
  email: any;
  password: any;
  confirmPswd: any;
  localStoragArr: any = []
  userDetails: any = {}
  nameValid: boolean = false;
  // below same name (signUpForm) is must matched with its html file as <formGroup="signUpForm">
  signUpForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    user_mail: new FormControl('', [Validators.required, Validators.email]),
    user_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    confirm_pswd: new FormControl('', [Validators.required])
  })

  // below are used to form validations
  get user_name() {
    return this.signUpForm.get('user_name')
  }
  get user_mail() {
    return this.signUpForm.get('user_mail')
  }
  get user_password() {
    return this.signUpForm.get('user_password')
  }
  get confirm_pswd() {
    return this.signUpForm.get('confirm_pswd')
  }
  dataStore() {
    console.log(this.signUpForm);
    this.nameValid = true;
    console.log(this.user_password?.value);
    console.log(this.confirm_pswd?.value);
// console.log("My status",this.signUpForm.valid);

    if (this.signUpForm.valid) {

      this.userDetails = {
        username: this.user_name?.value,
        useremail: this.user_mail?.value,
        userpswd: this.user_password?.value
      }
      console.log(this.localStoragArr);
      
      this.localStoragArr.push(this.userDetails)
      console.log(this.localStoragArr);
      localStorage.setItem("userDetails", JSON.stringify(this.localStoragArr))
      this.signUpForm.reset()

      Swal.fire({
        title: 'Great work',
        icon: 'success',
        text: 'You have signup successfully Go for Log In Now',

      })
      // after successful log in user can navigate to log in page
      // this.myrout.navigate(['login'])

    }
    else {
      Swal.fire({
        title: 'Action required',
        icon: 'error',
        text: 'please fill all required details'
      })

    }


  }

}

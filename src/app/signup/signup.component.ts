import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,MinLengthValidator,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {
    
  }
userName:any;
email:any;
password:any;
confirmPswd:any;
localStoragArr:any=[]
userDetails:any={}
nameValid:boolean=false;
// below same name (signUpForm) is must matched with its html file as <formGroup="signUpForm">
signUpForm=new FormGroup({
  user_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  user_mail:new FormControl('',[Validators.required,Validators.email]),
  user_password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  confirm_pswd:new FormControl('',[Validators.required])
})

// below are used to form validations
get user_name(){
  return this.signUpForm.get('user_name')
}
get user_mail(){
  return this.signUpForm.get('user_mail')
}
get user_password(){
  return this.signUpForm.get('user_password')
}
get confirm_pswd(){
  return this.signUpForm.get('confirm_pswd')
}
  dataStore(){
    console.log(this.signUpForm);
    this.nameValid=true;
    console.log(this.user_password?.value);
    console.log(this.confirm_pswd?.value);
  
    
    

    if(this.signUpForm.valid){

    this.userDetails={
      username:this.user_name?.value,
      useremail:this.user_mail?.value,
      userpswd:this.user_password?.value
    }

    this.localStoragArr.push(this.userDetails)
    
    localStorage.setItem("userDetails",JSON.stringify(this.localStoragArr))
    this.signUpForm.reset()

      Swal.fire({
        title:'Great work',
        icon:'success',
        text:'You have signup successfully',
        
      })
   
    }
    else{
      Swal.fire({
        title:'Action required',
        icon:'error',
        text:'please fill all required details'
      })
   
    }

    
  }

}

import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

  constructor( private toLogin:Router){  }

resetForm=new FormGroup({
  mail:new FormControl('',[Validators.required]),
  resetPswd:new FormControl('',[Validators.required,Validators.minLength(6)]),
  confirmPswd:new FormControl('',[Validators.required])
})
get mail(){
  return this.resetForm.get('mail')
}
get resetPswd(){
  return this.resetForm.get('resetPswd')
}
get confirmPswd(){
  return this.resetForm.get('confirmPswd')
}

LocalStoreDataObj:any;
LocalStoreData:any;
mailListOfLocal:any;
pswdLocalStore:any;

// reset password functionality
resetPassword(){
  // console.log(this.resetForm);
  // console.log(this.mail);
  // console.log(this.resetPswd);
  // console.log(this.confirmPswd);

this.LocalStoreDataObj=localStorage.getItem('userDetails')
console.log(this.LocalStoreDataObj);

this.LocalStoreData=JSON.parse(this.LocalStoreDataObj);
this.mailListOfLocal=this.LocalStoreData.map((list:any)=>   `${list.useremail}` )
this.pswdLocalStore=this.LocalStoreData.map((item:any)=>   `${item.userpswd}` )

// console.log(this.mailListOfLocal);
// console.log(this.pswdLocalStore);
//   console.log(this.resetPswd?.value);
//   console.log(this.mail?.value);
  for(let i=0 ; i<this.mailListOfLocal.length;i++){
    console.log('enterd in for loop');
    
    if(this.mail?.value === this.mailListOfLocal[i] ){
            this.pswdLocalStore[i]=this.resetPswd?.value;
            Swal.fire({
              icon:'success',
              title:"Hurraay.... ",
              titleText:'Password has been reset'
            })
            console.log('password reset succeful');
            this.toLogin.navigate(['/login'])
            console.log(this.LocalStoreDataObj);
            // this.LocalStoreDataObj[i].userpswd=this.resetPswd?.value
            console.log("HEREEEE",this.LocalStoreDataObj);
            
            


    }
    else{
      console.log('details are not matched');
      
      // Swal.fire({
      //   icon:'warning',
      //   title:'OOoops... Details are not matched   try again'
    
      // })
    }
  }
  


  this.resetForm.reset()
  
  
}



}

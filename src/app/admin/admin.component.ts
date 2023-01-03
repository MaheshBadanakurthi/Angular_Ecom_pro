import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

adminLogin=new FormGroup({
  admin_mail:new FormControl('',[Validators.required]),
  admin_pswd:new FormControl('',[Validators.required])
})

}

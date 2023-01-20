import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private homeroute: Router ) { }
  logout() {
    sessionStorage.clear();
    console.log('session storage cleared');
    if (sessionStorage) {
      Swal.fire({
        icon: 'success',
        title: 'LogOut succesful'
      })
    }
    this.homeroute.navigate(['home'])

  }
  toProducts() {
    this.homeroute.navigate(['products'])
  }


  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  onFileChange(event: any): void {
      this.imgChangeEvt = event;
       
      
  }
  // below one is executing every time we change our crop.
  // cropImg(e: ImageCroppedEvent) {
  //     this.cropImgPreview = e.base64;
  // }
  // imgLoad() {
  //     // display cropper tool
  // }
  // initCropper() {
  //     // init cropper
  // }
  
  // imgFailed() {
  //     // error msg
  // }






}

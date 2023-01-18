import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private homeroute: Router) { }
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


}

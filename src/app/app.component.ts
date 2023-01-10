import { Component,OnInit,DoCheck} from '@angular/core';
 import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit,DoCheck{
  
  productShow:boolean=true;
  logoutShow:boolean=true;
  forLoggin:any;
  forlog:any;
  loginHidden:boolean=false;
  cartlength:number;
  cartArrValues:any;

  constructor( private myCartItems:CartService ){  }

  ngOnInit():void{
    this.forLoggin =  sessionStorage.getItem('loggedin')
      this.forlog=JSON.parse(this.forLoggin)
      
      if(this.forlog){
        this.productShow=false
      }
     
      // this.productShow = this.log.toShowProducts
  }
 
ngDoCheck(): void {
  this.forLoggin =  sessionStorage.getItem('loggedin')
      this.forlog=JSON.parse(this.forLoggin)
      // console.log('working Do check');
      
      if(this.forlog){
        this.productShow=false;
        this.logoutShow=false
        this.loginHidden=true
      }
      else{
        this.productShow=true;
        this.logoutShow=true;
      }
// below functionality is used to show no of item in cart 
      this.cartArrValues=this.myCartItems.myCart;
      if(this.cartArrValues){
        this.cartlength=this.cartArrValues.length
      }

}


}

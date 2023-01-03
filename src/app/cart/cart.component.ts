import { Component,OnInit} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartArr:any;
  noOfItems:number=1
  
  totalCost:number=0

  constructor( private toCartArr:CartService ) {    }
// when Cart component loads in browser by default ngOnint  Loads first.
ngOnInit(): void {
  // storing arrays in   cartArr to use in this componets 
  //  this.toCartArr.myCart  it is coming from Cart service.
  // We are looping  CartArr which store data from Cart service
  this.cartArr=this.toCartArr.myCart;

}


increment(){
  
  if(this.noOfItems<5){
    this.noOfItems+=1
  }
}
decrement(){
  
  if(this.noOfItems!=1){
    this.noOfItems-=1
  }
}

  // Removing item index is passing from Cart component but delets from Cart service.
  removeItem(removeIndex:number){
    this.toCartArr.deleteItem(removeIndex)
  }  

}

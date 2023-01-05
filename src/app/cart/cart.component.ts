import { Component,OnInit,DoCheck,ViewChild, ElementRef} from '@angular/core';
import { CartService } from '../cart.service';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {
  cartArr:any;
  noOfItems:number=1
  faRemove=faTrashRestore
  Pro_Cost:number;
  priceArr=[]
  

  constructor( private toCartArr:CartService ) {    }
// when Cart component loads in browser by default ngOnint  Loads first.
ngOnInit(): void {
  // storing arrays in   cartArr to use in this componets 
  //  this.toCartArr.myCart  it is coming from Cart service.
  // We are looping  CartArr which store data from Cart service
  this.cartArr=this.toCartArr.myCart;
}
 
ngDoCheck(): void {

console.log(  );

//  console.log( [1,4,7,2,16].reduce((s,x)=>(s+x)));
 
  // this.totalPriceArr.push()
  
}

increment(Product:any){
  if(this.noOfItems<5){
    this.noOfItems+=1;
  
  }
}
decrement(Product:any){
  
  if(this.noOfItems!=1){
    this.noOfItems-=1
  }
}


  // Removing item index is passing from Cart component but delets from Cart service.
  removeItem(removeIndex:number){
    this.toCartArr.deleteItem(removeIndex)
  }  

}

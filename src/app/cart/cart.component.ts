import { Component,OnInit,DoCheck,ViewChild, ElementRef} from '@angular/core';
import { CartService } from '../cart.service';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {
  cartArr:any[]
  noOfItems:number[]=[1,1,1,1,1,1,1,1,1,1,1];
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
  
  // for(let i=0; i<this.cartArr.lenght;i++){
  //   this.noOfItems[i]=1;
  //   this.noOfItems.push(1)

  // }
  // console.log(this.noOfItems)
  console.log(this.cartArr);
}
 
ngDoCheck(): void {

//  console.log( [1,4,7,2,16].reduce((s,x)=>(s+x)));
  
}

increment(i:number){
  // console.log(product)
  if(this.noOfItems[i]<5){
    this.noOfItems[i]+=1;
  
  }
}
decrement(i:number){
  // console.log(product)
  
  if(this.noOfItems[i]!=1){
    this.noOfItems[i]-=1
  }
}


  // Removing item index is passing from Cart component but delets from Cart service.
  removeItem(removeIndex:number){
    this.toCartArr.deleteItem(removeIndex)
  }  

}

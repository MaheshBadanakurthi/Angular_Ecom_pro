import { Component,OnInit,DoCheck,ViewChild, ElementRef} from '@angular/core';
import { CartService } from '../cart.service';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { NONE_TYPE } from '@angular/compiler';
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
  priceArr:any=[]
  GrandTotal:number=0;
  constructor( private toCartArr:CartService ) {  this.cartArr=this.toCartArr.myCart;  }
// when Cart component loads in browser by default ngOnint  Loads first.
ngOnInit(): void {
    this.priceArr=this.cartArr.map((item:any)=> Number(` ${item.price} `) )
  // for(let i=0; i<this.cartArr.lenght;i++){
  //   this.noOfItems[i]=1;
  //   this.noOfItems.push(1)
  // }
  // console.log(this.noOfItems)
  console.log(this.cartArr);
  
}
 
ngDoCheck(): void {
  
  if(this.cartArr.length ===0){
    // console.log();
    
  }
else{
  this.GrandTotal=(this.priceArr.reduce((x:any,y:any)=> (x+y))).toFixed(2)

} 

//  console.log( [1,4,7,2,16].reduce((s,x)=>(s+x)));

}

increment(i:number){
  console.log(i)
  if(this.noOfItems[i]<5){
    this.noOfItems[i]+=1;
    
  }
  this.priceArr[i]= this.cartArr[i].price * this.noOfItems[i]
  console.log(this.priceArr);

}
decrement(i:number){
  console.log(i)
  
  if(this.noOfItems[i]!=1){
    this.noOfItems[i]-=1
  }
  this.priceArr[i]= this.cartArr[i].price * this.noOfItems[i]
    console.log(this.priceArr);
}


  // Removing item index is passing from Cart component but delets from Cart service.
  removeItem(removeIndex:number){
    console.log(removeIndex);
    this.priceArr.splice(removeIndex,1)
    this.toCartArr.deleteItem(removeIndex)
  }  

}

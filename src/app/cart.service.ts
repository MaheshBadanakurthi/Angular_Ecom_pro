import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
myCart=[ { image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
title:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve',
price:112  }  ]

// based on usage we declare as many as methods here.
// below addItemToCart() method is called in Product Component to add selected item in araay.
addItemToCart(myObj:any){
  this.myCart.push(myObj)
}
// below is used to delete a item from array. We are passing index from Cart component. THis method is calling in cart component
deleteItem(index:number){
  this.myCart.splice(index,1)
}

}

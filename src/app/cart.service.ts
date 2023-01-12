import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
myCart:any=[]

// based on usage we declare as many as methods here.
// below addItemToCart() method is called in Product Component to add selected item in araay.
addItemToCart(myObj:any){
  this.myCart.push(myObj)
}
// below is used to delete a item from array. We are passing index from Cart component. THis method is calling in cart component
deleteItem(index:number){
  this.myCart.splice(index,1)
}
// below functionaity is used to display hte data in Details component;
show_pro_detailsArr={}
show_Pro_Details(pro_obj:any){
  this.show_pro_detailsArr=pro_obj
}

}

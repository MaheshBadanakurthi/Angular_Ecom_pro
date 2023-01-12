import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-pro-details',
  templateUrl: './show-pro-details.component.html',
  styleUrls: ['./show-pro-details.component.css']
})
export class ShowProDetailsComponent implements OnInit {
  prod_Details:any=[]
  sellers:any=[]
  i:number=0;
  faCartIcon=faCartArrowDown

  constructor( private cartS:CartService){  
    // this.prod_Details=this.cartS.show_pro_detailsArr;
    this.prod_Details=this.cartS.show_pro_detailsArr;
    console.log(this.prod_Details.Sellers);
    this.sellers = this.prod_Details.Sellers
  }
ngOnInit(): void {
  if(!this.prod_Details){
    console.log("No product details now");
  }
}

  // showing for sellers popup to direct to cart
  addItemtoCartSellers(index:number){
    console.log(index);
    console.log(this.sellers[index]);
    let x={
      // image:this.prod_Details[index].pro_url[0].urls,
      price:this.sellers[index].sell_price,
      title:this.sellers[index].sell_brand,
     image: this.prod_Details.pro_url[0].urls
  }
  this.cartS.addItemToCart(x)
  Swal.fire({
    icon:'success',
    title:"Item added to the cart"
  })
    
  }








  
}

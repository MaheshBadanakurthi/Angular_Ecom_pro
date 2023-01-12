import { JsonPipe } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import {NgbModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sellingproduct',
  
  templateUrl: './sellingproduct.component.html',
  styleUrls: ['./sellingproduct.component.css'],
  providers:[NgbCarouselModule,NgbPopoverModule],
  
})
export class SellingproductComponent implements OnInit{

  lsForSellProduct:any;
  lsData:any
  sellingProductToCart:any={};
  carouselImg=[]
  faCartIcon=faCartArrowDown
  sellers:any=[]
  // carousel test
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor( private myCartS:CartService, private bsModal:NgbModal, private route:Router){   }
  
  ngOnInit(): void {
    this.lsData=localStorage.getItem('selling_Products')
    this.lsForSellProduct=JSON.parse(this.lsData) 
    console.log(this.lsForSellProduct);
    this.carouselImg=this.lsForSellProduct.map((item:any)=> `${item.image}` )
    
  }
  description:string;
  price:number;
  image:any;
  addItemtoCart(index:number){
    this.sellingProductToCart={
      image:this.lsForSellProduct[index].pro_url[0].urls,
      price:this.lsForSellProduct[index].Sellers[0].sell_price,
      title:this.lsForSellProduct[index].pro_name
    }
    // this.sellingProductToCart = this.lsForSellProduct[index];
    this.myCartS.addItemToCart(this.sellingProductToCart)
    Swal.fire({
      icon:'success',
      title:"Item added to the cart"
    })
      
  }


  // Below is used to show popup for images  Carousel
  carouselImgArr:any[]=[]
  showCarouselPopup(myCarousel:any, index:number){
    this.bsModal.open(myCarousel);
    console.log(this.lsForSellProduct[index].pro_url);
    this.carouselImg=this.lsForSellProduct[index].pro_url
    console.log(this.carouselImg);
this.carouselImgArr=this.carouselImg.map((each:any)=>`${each.urls}`)
   console.log(this.carouselImgArr);
    
  }

  // below executing after click on details.
  itemDetails:any={}
  detailsIndex:number;
  showItemDetails(itemDetails:any,index:number){
    console.log('details is clicked index is', index);
    this.detailsIndex=index;
    this.bsModal.open(itemDetails)
    this.itemDetails=this.lsForSellProduct[index]
    console.log(this.itemDetails);
    // below sellers are used give seller info after we click ther details button
    this.sellers=this.lsForSellProduct[index].Sellers;
    console.log(this.sellers);
    
  }

  // showing for sellers popup to direct to cart
  addItemtoCartSellers(index:number){
    console.log(index);
    console.log(this.sellers[index]);
    let x={
      image:this.lsForSellProduct[this.detailsIndex].pro_url[0].urls,
      price:this.sellers[index].sell_price,
      title:this.sellers[index].sell_brand,
  }
  this.myCartS.addItemToCart(x)
  Swal.fire({
    icon:'success',
    title:"Item added to the cart"
  })
    
  }

// IN below functionality I used cart service to store data n display in Details component
  seeProductDetails(index:number){
    this.myCartS.show_Pro_Details( this.lsForSellProduct[index]  )
    this.route.navigate(['/show_pro_Details'])
  }









}

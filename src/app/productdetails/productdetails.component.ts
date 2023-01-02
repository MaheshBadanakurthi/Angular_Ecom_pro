import { Component,OnInit, DoCheck,AfterContentChecked } from '@angular/core';
import { MyproductapiService } from '../myproductapi.service'
// import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit,AfterContentChecked {

  myproducts:any;
  indexFromProduct:any
  constructor (private myAPI:MyproductapiService){}

  ngOnInit(): void {
    this.myAPI.x().subscribe((res:any)=>{
      console.log(res);
      this.myproducts=res
    })
  }
  // ngDoCheck(): void {
  //   this.indexFromProduct=2
  // }
ngAfterContentChecked(): void {
  this.indexFromProduct=2
}


}

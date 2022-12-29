import { Component,OnInit } from '@angular/core';
import { MyproductapiService } from '../myproductapi.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts:any;
  constructor(private myapi:MyproductapiService){
  }
  ngOnInit(): void {
    this.myapi.x().subscribe((res:any)=>{
      console.log(res);
      this.myProducts=res
    })
  }
  apidata(){
    console.log(this.myProducts);
    
  }


}

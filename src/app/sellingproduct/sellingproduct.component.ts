import { JsonPipe } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sellingproduct',
  templateUrl: './sellingproduct.component.html',
  styleUrls: ['./sellingproduct.component.css']
})
export class SellingproductComponent implements OnInit{

  lsForSellProduct:any;
  lsData:any
  faCartIcon=faCartArrowDown
  
  ngOnInit(): void {
    this.lsData=localStorage.getItem('selling_Products')
    this.lsForSellProduct=JSON.parse(this.lsData)
    console.log(this.lsForSellProduct);
    
  }

}

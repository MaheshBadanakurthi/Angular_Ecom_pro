


import { Component,DoCheck,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { faE, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-addsellproduct',

  templateUrl: './addsellproduct.component.html',
  styleUrls: ['./addsellproduct.component.css']
})
export class AddsellproductComponent implements OnInit{
userEntryProDetails:{}={ };
faDelete=faTrashCan;
faEdit=faEdit;
faCart=faShoppingCart
editPro_id:number
editPro_name:string
editPro_desc:string;
editPro_url:any
editPro_price:number
sellingProductsArr:any
storingLSdata:any;
 
product_form:FormGroup
constructor( private Pro_Model:NgbModal,private fb:FormBuilder){ 
  this.product_form= this.fb.group({
    pro_Id:new FormControl(),
    pro_Name:new FormControl(),
    pro_URL: this.fb.array([this.addNewInput()]),
    seller:this.fb.array([this.addNewSeller()])
  });
  }

  ngOnInit(): void {
    this.storingLSdata = localStorage.getItem('selling_Products');
    this.sellingProductsArr = JSON.parse(this.storingLSdata)
    console.log(this.sellingProductsArr);
   }
get addingNewInput(): FormArray{
  return  <FormArray>this.product_form.get('pro_URL')
}
  addNewInput() {
    return this.fb.group({
      urls:new FormControl()
    })
  }
// nelow is for adding new input
 forNewInput(){
  this.addingNewInput.push(this.addNewInput())
 }
//  removing input
 removingInput(index:number){
  this.addingNewInput.removeAt(index)
 }
// for seller inputs
get addSellerInput():FormArray{
  return <FormArray>this.product_form.get('seller')
}
addNewSeller(){
  return this.fb.group({
    sell_price:new FormControl(),
    sell_desc:new FormControl(),
    sell_brand:new FormControl()
  })
}
newSeller(){
  this.addSellerInput.push(this.addNewSeller())
}
removeSeller(index:number){
  this.addSellerInput.removeAt(index)
}
// below are getter methods to acces input fields.
get pro_Id(){
   return this.product_form.get('pro_Id')
}
get pro_Name(){
  return this.product_form.get('pro_Name')
}
get pro_URL(){
  return this.product_form.get('pro_URL')
}
get seller(){
  return this.product_form.get('seller')
}
// below is used to open bootstrap model to add product
  addProductDetails(modalData:any){
    this.Pro_Model.open(modalData)
  }
  // Adding data in bootstrap model and storing
  addProDetails(){
    let userPro={
       pro_id: this.pro_Id?.value,
       pro_name:this.pro_Name?.value,
       pro_url:this.pro_URL?.value,
       Sellers:this.seller?.value
     }
     console.log(userPro);
     this.sellingProductsArr.push(userPro)
     console.log(this.sellingProductsArr);
     localStorage.setItem("selling_Products",JSON.stringify(this.sellingProductsArr))
     this.product_form.reset()
     this.Pro_Model.dismissAll()
  }
// Closing Bootstrap model
  closeModel(){
    this.Pro_Model.dismissAll()
  }
// Removing the Product from ther list
  productRemove(Pro_index:number){
    this.sellingProductsArr.splice(Pro_index,1);
    localStorage.setItem("selling_Products", JSON.stringify(this.sellingProductsArr))
  }

  indexForUpdateDetails:number;
  lsToUpdate:any;
  lsJsonData:any;
edit_Pro_Details(editDetails:any,editIndex:number){
   this.indexForUpdateDetails=editIndex;
    // this.sellingProductsArr[editIndex]
    console.log(this.sellingProductsArr[editIndex]);
    this.editPro_id=this.sellingProductsArr[editIndex].pro_id,
      this.editPro_name=this.sellingProductsArr[editIndex].pro_name,
      this.editPro_desc=this.sellingProductsArr[editIndex].pro_desc,
      this.editPro_url=this.sellingProductsArr[editIndex].pro_url,
      this.editPro_price=this.sellingProductsArr[editIndex].pro_price
     this.Pro_Model.open(editDetails)
  }
// after editing, below functionality used for update that details.
  updateEditedDetails(){
    console.log(this.indexForUpdateDetails);
    let updateObj={
      id: this.editPro_id  ,
      title:  this.editPro_name  ,
      description:  this.editPro_desc,
      image:this.editPro_url,
      price: this.editPro_price  
    }
    this.sellingProductsArr[this.indexForUpdateDetails]=updateObj;
    this.lsToUpdate= localStorage.getItem('selling_Products');
    this.lsJsonData = JSON.parse(this.lsToUpdate)
    this.lsJsonData[this.indexForUpdateDetails]=updateObj;
    localStorage.setItem("selling_Products",JSON.stringify(this.lsJsonData))
    // console.log( lsToUpdate[this.indexForUpdateDetails] );
    this.Pro_Model.dismissAll()
  }




}
















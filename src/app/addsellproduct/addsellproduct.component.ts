


import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { faE, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-addsellproduct',

  templateUrl: './addsellproduct.component.html',
  styleUrls: ['./addsellproduct.component.css']
})
export class AddsellproductComponent implements OnInit {
  userEntryProDetails: {} = {};
  faDelete = faTrashCan;
  faEdit = faEdit;
  faCart = faShoppingCart
  arrowUp = faArrowCircleRight;
  editPro_id: number
  editPro_name: string
  editPro_desc: string;
  editPro_url: any
  editPro_price: number
  sellingProductsArr: any=[ ]
  storingLSdata: any;

  product_form: FormGroup
  constructor(private Pro_Model: NgbModal, private fb: FormBuilder) {
    this.product_form = this.fb.group({
      category: new FormControl(),
      pro_Id: new FormControl(),
      pro_Name: new FormControl(),
      pro_URL: this.fb.array([this.addNewInput()]),
      seller: this.fb.array([this.addNewSeller()])
    });
  }

  ngOnInit(): void {
    this.storingLSdata = localStorage.getItem('selling_Products');
    this.sellingProductsArr = JSON.parse(this.storingLSdata)
    console.log(this.sellingProductsArr);
  }
  get addingNewInput(): FormArray {
    return <FormArray>this.product_form.get('pro_URL')
  }
  addNewInput() {
    return this.fb.group({
      urls: new FormControl()
    })
  }
  // nelow is for adding new input
  forNewInput() {
    this.addingNewInput.push(this.addNewInput())
  }
  //  removing input
  removingInput(index: number) {
    this.addingNewInput.removeAt(index)
  }
  // for seller inputs
  get addSellerInput(): FormArray {
    return <FormArray>this.product_form.get('seller')
  }
  addNewSeller() {
    return this.fb.group({
      sell_price: new FormControl(),
      sell_desc: new FormControl(),
      sell_brand: new FormControl()
    })
  }
  newSeller() {
    this.addSellerInput.push(this.addNewSeller())
  }
  removeSeller(index: number) {
    this.addSellerInput.removeAt(index)
  }
  // below are getter methods to acces input fields.
  get category() {
    return this.product_form.get('category')
  }
  get pro_Id() {
    return this.product_form.get('pro_Id')
  }
  get pro_Name() {
    return this.product_form.get('pro_Name')
  }
  get pro_URL() {
    return this.product_form.get('pro_URL')
  }
  get seller() {
    return this.product_form.get('seller')
  }
  // below is used to open bootstrap model to add product
  addProductDetails(modalData: any) {
    this.Pro_Model.open(modalData)
  }
  // Adding data in bootstrap model and storing
  addProDetails() {
    let userPro = {
      category: this.category?.value,
      pro_id: this.pro_Id?.value,
      pro_name: this.pro_Name?.value,
      pro_url: this.pro_URL?.value,
      Sellers: this.seller?.value
    }
    // console.log(userPro);
    this.sellingProductsArr.push(userPro)
    // console.log(this.sellingProductsArr);

    localStorage.setItem("selling_Products", JSON.stringify(this.sellingProductsArr))

    this.product_form.reset()
    this.Pro_Model.dismissAll()
  }
  // Closing Bootstrap model
  closeModel() {
    this.Pro_Model.dismissAll()
  }
  // Removing the Product from ther list
  productRemove(Pro_index: number) {
    this.sellingProductsArr.splice(Pro_index, 1);
    localStorage.setItem("selling_Products", JSON.stringify(this.sellingProductsArr))
  }

  indexForUpdateDetails: number;
  lsToUpdate: any;
  lsJsonData: any;
  editCatg: string;
  editSellers: any = []
  editUrls: any = []
  editurls: any;
  editsell_price: number;
  editsell_desc: string;
  editsell_brand: string;

  edit_Pro_Details(editDetails: any, editIndex: number) {
    this.indexForUpdateDetails = editIndex;

    this.editCatg = this.sellingProductsArr[editIndex].category;
    this.editPro_id = this.sellingProductsArr[editIndex].pro_id,
      this.editPro_name = this.sellingProductsArr[editIndex].pro_name,
      this.editSellers = this.sellingProductsArr[editIndex].Sellers;
    this.editUrls = this.sellingProductsArr[editIndex].pro_url
    
    console.log(this.editSellers);
    console.log(this.editUrls);
    // below is used to open model popup
    this.Pro_Model.open(editDetails)
  }
  // after editing, below functionality used for update that details.
  updatedData: any = {}
  updateEditedDetails() {
    console.log(this.indexForUpdateDetails);
    console.log(this.editCatg, this.editPro_id, this.editPro_name);
    console.log(this.editSellers);
    console.log(this.editUrls);
    //  my sell pro arr
    this.updatedData = {
      category: this.editCatg,
      pro_id: this.editPro_id,
      pro_name: this.editPro_name,
      Sellers: this.editSellers,
      pro_url: this.editUrls
    }
    // console.log(this.updatedData);
    // console.log(this.sellingProductsArr);
    this.sellingProductsArr[this.indexForUpdateDetails] = this.updatedData
    // console.log(this.sellingProductsArr);
    localStorage.setItem("selling_Products", JSON.stringify(this.sellingProductsArr))
// below is for close the modal popup
    this.Pro_Model.dismissAll()
  }
  // below is remove urls
  removeUrl(index: number) {
    console.log(index);
    console.log(this.editUrls);
    this.editUrls.splice(index, 1)
    console.log(this.editUrls);
  }
  // below is for remove seller info
  removeSellerDetails(index: number) {
    console.log(index);
    console.log(this.editSellers);
    this.editSellers.splice(index, 1)
    console.log(this.editSellers);
  }



}


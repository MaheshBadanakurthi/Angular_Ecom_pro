import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyproductapiService {

  constructor(private http:HttpClient) { }
  x(){
    return this.http.get<any>('https://fakestoreapi.com/products/')
  }
}

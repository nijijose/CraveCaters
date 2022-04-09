import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[];
  public menu =new BehaviorSubject<any>([]);
 // public custom = new BehaviorSubject<any>([]);
  constructor() { }

  getProducts(){
    return this.menu.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.menu.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.menu.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.menu.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.menu.next(this.cartItemList);
  }

}

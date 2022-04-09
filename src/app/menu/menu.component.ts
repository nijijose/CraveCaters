import { Component, OnInit } from '@angular/core';
import { MenuModel } from './menu.model';
import { MenuService } from '../menu.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:any =  'MenuModel[]';
  // showItem: boolean = false;


  constructor(private menuService:MenuService,private cartService:CartService,private router:Router) { }

  // toggleItem(): void{
  //   this.showItem = !this.showItem;
  // }

  ngOnInit(): void {
    this.menuService.getmenu().subscribe((data)=>{
      this.menu=JSON.parse(JSON.stringify(data));

      this.menu.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.rate});
        
      });
    })
  }

  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

  deleteMenu(item:any){
    this.menuService.deleteProduct(item._id)
      .subscribe((data) => {
        this.menu = this.menu.filter((p:any) => p  !== item);
      })
    }

    editMenu(item:any){
      // this.menuService.editProduct(item._id);
      // this.router.navigate(['update']);
      
      localStorage.setItem("editProductId", item._id.toString());
      this.router.navigate(['update']);
    }

}

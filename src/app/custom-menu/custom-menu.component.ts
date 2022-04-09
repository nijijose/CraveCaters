import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';
import { CustomModel } from './custom.model';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css']
})
export class CustomMenuComponent implements OnInit {
  custom:any =  'CustomModel[]';

  constructor(private menuService:MenuService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.menuService.customItem().subscribe((data)=>{
      this.custom=JSON.parse(JSON.stringify(data));

      this.custom.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.rate});
        
      });
    });
  }

  addcart(item:any){
    this.cartService.addtoCart(item);
  }

  deleteCustomMenu(item:any){
    this.menuService.deleteCustomProduct(item._id)
      .subscribe((data) => {
        this.custom = this.custom.filter((p:any) => p  !== item);
      })
    }

    editCustomMenu(item:any){
      // this.menuService.editProduct(item._id);
      // this.router.navigate(['update']);
      
      localStorage.setItem("editProductId", item._id.toString());
      this.router.navigate(['increment']);
    }

}

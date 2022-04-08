import { Component, OnInit } from '@angular/core';
import { MenuModel } from './menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:any =  'MenuModel[]';
  // showItem: boolean = false;


  constructor(private menuService:MenuService) { }

  // toggleItem(): void{
  //   this.showItem = !this.showItem;
  // }

  ngOnInit(): void {
    this.menuService.getmenu().subscribe((data)=>{
      this.menu=JSON.parse(JSON.stringify(data));
    })
  }

  deleteMenu(item:any){
    this.menuService.deleteProduct(item._id)
      .subscribe((data) => {
        this.menu = this.menu.filter((p:any) => p  !== item);
      })
    }

}

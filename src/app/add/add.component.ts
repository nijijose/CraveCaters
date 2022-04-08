import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { MenuModel } from '../menu/menu.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private menuService:MenuService,private router:Router) { }
 // menuitem = new MenuModel[];

  menuItem = {
    foodMenu : '',
    foodItem1 : '',
    foodItem2: '',
    rate : '',
    imageUrl : ''
  }

  ngOnInit(): void {
  }
  AddMenu(){
    this.menuService.newMenu(this.menuItem);
    console.log("Called");
    alert("Item is added to the menu successfully");
    this.router.navigate(['/menu']);

  }

}

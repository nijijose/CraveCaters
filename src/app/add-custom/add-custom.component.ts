import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { CustomModel } from '../custom-menu/custom.model';

@Component({
  selector: 'app-add-custom',
  templateUrl: './add-custom.component.html',
  styleUrls: ['./add-custom.component.css']
})
export class AddCustomComponent implements OnInit {

  constructor(private menuService:MenuService,private router:Router) { }

  customItem = {
    foodMenu : '',
    rate : '',
    imageUrl : ''
  }

  ngOnInit(): void {
  }

  Additem(){
    this.menuService.newitem(this.customItem);
    console.log("Called");
    alert("Item is added to the customise menu successfully");
    this.router.navigate(['custom']);
  }

}

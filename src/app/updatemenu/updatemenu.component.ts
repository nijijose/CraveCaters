import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent implements OnInit {

  constructor(private menuService: MenuService,private router:Router) { }

  menuItem = {
    foodMenu : '',
    foodItem1 : '',
    foodItem2: '',
    rate : '',
    imageUrl : ''
  }

  ngOnInit(): void {
    this.menuService.getmenu()
    .subscribe((data)=>{
      this.menuItem=JSON.parse(JSON.stringify(data));
    })
  }

  editMenu(){
    this.menuService.editProduct(this.menuItem);
    alert("Success");
    this.router.navigate(['menu']);
  }

}

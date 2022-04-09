import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-updatecustom',
  templateUrl: './updatecustom.component.html',
  styleUrls: ['./updatecustom.component.css']
})
export class UpdatecustomComponent implements OnInit {

  constructor(private menuService:MenuService,private router:Router) { }
  customItem = {
    foodMenu : '',
    rate : '',
    imageUrl : ''
  }

  ngOnInit(): void {
    this.menuService.customItem().subscribe((data)=>{
      this.customItem=JSON.parse(JSON.stringify(data));
    });
  }

  edititem(){
    this.menuService.editCustomProduct(this.customItem);
    alert("Success");
    this.router.navigate(['custom']);
  }

}

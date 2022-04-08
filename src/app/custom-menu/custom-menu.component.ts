import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CustomModel } from './custom.model';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css']
})
export class CustomMenuComponent implements OnInit {
  custom:any =  'CustomModel[]';

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.customItem().subscribe((data)=>{
      this.custom=JSON.parse(JSON.stringify(data));
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  getmenu(){
    return this.http.get("http://localhost:3110/menu");
  }

  newMenu(item:any){
    return this.http.post("http://localhost:3110/insert",{"menu":item})
    .subscribe(data =>{console.log(data)})
  }

  customItem(){
    return this.http.get("http://localhost:3110/custom");
  }

  newitem(item:any){
    return this.http.post("http://localhost:3110/additem",{"list":item})
    .subscribe(data =>{console.log(data)})
  }
}

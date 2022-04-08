import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomComponent } from './add-custom/add-custom.component';
import { AddComponent } from './add/add.component';
import { CartComponent } from './cart/cart.component';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{path:'menu',component:MenuComponent},
  {path:'add',component:AddComponent},{
  path:'custom',component:CustomMenuComponent},
  {path:'addcustom',component:AddCustomComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

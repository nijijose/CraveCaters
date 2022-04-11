import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './add/add.component';
import { MenuService } from './menu.service';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { AddCustomComponent } from './add-custom/add-custom.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart.service';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { UpdatecustomComponent } from './updatecustom/updatecustom.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AddComponent,
    CustomMenuComponent,
    AddCustomComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    UpdatemenuComponent,
    UpdatecustomComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

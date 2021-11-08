import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SamsungComponent } from './components/produtos/samsung/samsung.component';
import { MotorolaComponent } from './components/produtos/motorola/motorola.component';
import { LgComponent } from './components/produtos/lg/lg.component';
import { XiaomiComponent } from './components/produtos/xiaomi/xiaomi.component';
import { AsusComponent } from './components/produtos/asus/asus.component';
import { NokiaComponent } from './components/produtos/nokia/nokia.component';
import { SonyComponent } from './components/produtos/sony/sony.component';
import { BlackberryComponent } from './components/produtos/blackberry/blackberry.component';
import { HuaweiComponent } from './components/produtos/huawei/huawei.component';
import { AppleComponent } from './components/produtos/apple/apple.component';
import { ProdutosComponent } from './components/produtos/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutosComponent,
    SamsungComponent,
    MotorolaComponent,
    LgComponent,
    XiaomiComponent,
    AsusComponent,
    NokiaComponent,
    SonyComponent,
    BlackberryComponent,
    HuaweiComponent,
    AppleComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

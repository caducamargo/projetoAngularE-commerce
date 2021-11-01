import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AppleComponent } from './components/produtos/apple/apple.component';
import { AsusComponent } from './components/produtos/asus/asus.component';
import { BlackberryComponent } from './components/produtos/blackberry/blackberry.component';
import { HuaweiComponent } from './components/produtos/huawei/huawei.component';
import { LgComponent } from './components/produtos/lg/lg.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { MotorolaComponent } from './components/produtos/motorola/motorola.component';
import { NokiaComponent } from './components/produtos/nokia/nokia.component';
import { SamsungComponent } from './components/produtos/samsung/samsung.component';
import { SonyComponent } from './components/produtos/sony/sony.component';
import { XiaomiComponent } from './components/produtos/xiaomi/xiaomi.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'produtos/lista',component: ListarProdutosComponent},
  {path:'produtos/apple', component: AppleComponent},
  {path:'produtos/samsung',component: SamsungComponent},
  {path:'produtos/motorola', component: MotorolaComponent},
  {path:'produtos/lg',component: LgComponent},
  {path:'produtos/nokia', component: NokiaComponent},
  {path:'produtos/sony',component: SonyComponent},
  {path:'produtos/xiaomi', component: XiaomiComponent},
  {path:'produtos/asus',component: AsusComponent},
  {path:'produtos/blackberry', component: BlackberryComponent},
  {path:'produtos/huawei', component: HuaweiComponent}
];

@NgModule({
  imports:
  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

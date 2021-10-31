import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { IphoneComponent } from './components/produtos/iphone/iphone.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'produtos/lista',
    component: ListarProdutosComponent
  },
  {
    path: 'produtos/iphone', component: IphoneComponent
  }
];

@NgModule({
  imports:
  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

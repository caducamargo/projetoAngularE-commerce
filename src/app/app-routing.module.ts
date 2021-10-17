import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
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
    path: 'produtos/cadastrar', component: CadastrarProdutoComponent
  }
];

@NgModule({
  imports:
  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

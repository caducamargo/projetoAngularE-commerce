import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pje-commerce';
}
  ({
    selector: 'my-app',
    template: `
    <div class="container">
      <a routerLinkActive="active" 
         routerLink="/login">Login</a> |
  
      <a routerLinkActive="active" 
         routerLink="/home">Home</a> | 
  
      <a routerLinkActive="active" 
         routerLink="/cadastrar">cadastrar</a> | 
  
  
      <a routerLinkActive="active" 
        routerLink="/catalog">Catalog</a> 
        
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css'],
  })

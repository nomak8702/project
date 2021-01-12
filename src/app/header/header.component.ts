import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
 <div class="navbar is-light">
 <div class="navbar-brand">
  <a class ="navbar-item">
  <img src="assets/img/pizzerie-logo.png">
  </a>
  </div>
  <div class="navbar-menu">
  <div class="navbar-end">
  <a class="navbar-item" routerLink="/">Acasa</a>
  <a class="navbar-item" routerLink="/menu">Menu</a>
  <a class="navbar-item">Cos</a>
  <a class="navbar-item" routerLink="/contact">Contact</a>
   </div>
    </div>
 </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

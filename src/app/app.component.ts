import { Item } from './components/main-menu/item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regivaldo';

  social = [
    new Item('LinkedIn', '', 'linkedin.svg'),
    new Item('Codepen', '', 'codepen.svg'),
    new Item('Github', '', 'github.svg'),
    new Item('Facebook', '', 'facebook.svg'),
    new Item('Instagram', '', 'instagram.svg'),
    new Item('Twitter', '', 'twitter.svg')
  ];

  menu = [
    new Item('Início', 'inicio', ''),
    new Item('Sobre', 'sobre', ''),
    new Item('Serviços', 'servicos', ''),
    new Item('Portfólio', 'portfolio', ''),
    new Item('Contato', 'contato', '')
  ];

  services = [];

  portfolio = [];
}

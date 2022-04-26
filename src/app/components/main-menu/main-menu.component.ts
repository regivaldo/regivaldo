import { Item } from './item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Input() menu: Item[] = [];
  @Input() social: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isActive(item: string) {
    const hash = window.location.hash == '' ? '#inicio' : window.location.hash;
    return hash.indexOf(item) > -1;
  }

}

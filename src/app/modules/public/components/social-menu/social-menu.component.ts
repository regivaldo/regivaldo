import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../main-menu/item';

@Component({
  selector: 'app-social-menu',
  templateUrl: './social-menu.component.html',
  styleUrls: ['./social-menu.component.scss']
})
export class SocialMenuComponent {

  @Input() social: Item[] = [];

  constructor() { }
}

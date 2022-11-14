import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() number: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

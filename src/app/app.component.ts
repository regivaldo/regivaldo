import { Portfolio } from './models/portfolio';
import { Item } from './modules/public/components/main-menu/item';
import { Component } from '@angular/core';
import { Service } from './models/service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regivaldo';
}

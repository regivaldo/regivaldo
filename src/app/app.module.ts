import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    CardIconComponent,
    CardImageComponent,
    MainMenuComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

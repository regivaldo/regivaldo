import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { IconsComponent } from './components/icons/icons.component';


@NgModule({
  declarations: [
    PublicComponent,
    CardIconComponent,
    CardImageComponent,
    CardIconComponent,
    MainMenuComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PublicModule { }

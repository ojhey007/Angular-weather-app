import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './widget/carousel/carousel.component';
import { RootContainerComponent } from './component/root-container/root-container.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    NavbarComponent,
    CarouselComponent,
    RootContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

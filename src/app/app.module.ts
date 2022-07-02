import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { WellnessComponent } from './components/wellness/wellness.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CirclesComponent } from './components/circles/circles.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { BannerComponent } from './components/banner/banner.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LuxuryComponent,
    WellnessComponent,
    RestaurantsComponent,
    AdvantagesComponent,
    RoomsComponent,
    CirclesComponent,
    TestimonialsComponent,
    BlogComponent,
    BannerComponent,
    BottomInfoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

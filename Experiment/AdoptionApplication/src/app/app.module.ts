import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { DogAdoptionComponent } from './pages/dog-adoption/dog-adoption.component';
import { CatAdoptionComponent } from './pages/cat-adoption/cat-adoption.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    DogAdoptionComponent,
    CatAdoptionComponent,
    PetCareComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

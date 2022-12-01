import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {CatAdoptionComponent} from "./pages/cat-adoption/cat-adoption.component";
import {DogAdoptionComponent} from "./pages/dog-adoption/dog-adoption.component";
import {PetCareComponent} from "./pages/pet-care/pet-care.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cat-adoption',component:CatAdoptionComponent},
  {path:'dog-adoption',component:DogAdoptionComponent},
  {path:'pet-care',component:PetCareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

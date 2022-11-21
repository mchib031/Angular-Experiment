import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponentComponent } from './helloworld-component/helloworld-component.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponentComponent,
    TextInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

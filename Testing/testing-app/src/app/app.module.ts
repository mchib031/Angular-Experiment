import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponentComponent } from './helloworld-component/helloworld-component.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContentComponent } from './content/content.component';
import { TestPipePipe } from './test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponentComponent,
    TextInterpolationComponent,
    ParentComponent,
    ChildComponent,
    ContentComponent,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

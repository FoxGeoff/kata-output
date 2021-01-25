import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { ChildOutputComponent } from './child-output/child-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOutputComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // 👈 Required for ngStyle

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'; // Your directive

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule  // 👈 This enables ngStyle and other common directives
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

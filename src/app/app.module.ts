import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

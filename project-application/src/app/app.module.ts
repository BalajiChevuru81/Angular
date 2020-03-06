import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FreshCompComponent } from './fresh-comp/fresh-comp.component';
import { ChangeTextDirective } from './change-text.directive';

@NgModule({
   declarations: [
      AppComponent,
      FreshCompComponent,
      ChangeTextDirective
   ],

   imports: [
      BrowserModule
   ],

   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
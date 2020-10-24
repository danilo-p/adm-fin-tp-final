import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversaoDeJurosComponent } from './conversao-de-juros/conversao-de-juros.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversaoDeJurosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

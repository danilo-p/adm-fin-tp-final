import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversaoDeJurosComponent } from './conversao-de-juros/conversao-de-juros.component';
import { Formula1Component } from './formula1/formula1.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { WaccComponent } from './wacc/wacc.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversaoDeJurosComponent,
    Formula1Component,
    MeuComponenteComponent,
    WaccComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelecaoCardComponent } from './selecao-card/selecao-card.component';
import { PartidaCardComponent } from './partida-card/partida-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoCardComponent,
    PartidaCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { RickAndMortyComponent } from './pages/rick-and-morty/rick-and-morty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    RickAndMortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

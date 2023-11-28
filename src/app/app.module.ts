import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { concertsComponent } from './concerts/concerts.component';
import { AddconcertComponent } from './add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';
import { UpdateconcertComponent } from './update-concert/update-concert.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    concertsComponent,
    AddconcertComponent,
    UpdateconcertComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

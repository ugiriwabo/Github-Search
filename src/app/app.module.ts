import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormsComponent } from './search-forms/search-forms.component';
import { SearchComponent } from './search/search.component';
import{FormsModule} from '@angular/forms';
import { StrikethroughDirective } from './strikethrough.directive'

@NgModule({
  declarations: [
    AppComponent,
    SearchFormsComponent,
    SearchComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

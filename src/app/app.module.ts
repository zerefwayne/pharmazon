import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ImageSearchComponent } from './search/image-search/image-search.component';
import { TextSearchComponent } from './search/text-search/text-search.component';
import {FormsModule} from '@angular/forms';
import { MedicineComponent } from './search/medicine/medicine.component';
import {NgxImageZoomModule} from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SearchComponent,
    ImageSearchComponent,
    TextSearchComponent,
    MedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoanComponent } from './loan/loan.component';
import { CarComponent } from './loan/car/car.component';
import { BikeComponent } from './loan/bike/bike.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    LoanComponent,
    CarComponent,
    BikeComponent,
    HomeComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

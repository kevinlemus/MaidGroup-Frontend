import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { RegisterComponent } from './components/user/register/register.component';
import { InvoiceComponent } from './components/user/invoice/invoice.component';
import {MatCardModule} from '@angular/material/card';
import { InvoiceListComponent } from './components/user/invoice-list/invoice-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDividerModule} from '@angular/material/divider';
import { ZipcodeComponent } from './components/home/zipcode/zipcode.component';
import { InfoCardsComponent } from './components/home/info-cards/info-cards.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatAccordion } from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LoginPageComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterComponent,
    InvoiceComponent,
    InvoiceListComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    ZipcodeComponent,
    InfoCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

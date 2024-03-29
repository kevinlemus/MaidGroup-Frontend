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
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/user/register/register.component';
import { InvoiceComponent } from './components/user/invoice/invoice.component';
import { MatCardModule } from '@angular/material/card';
import { InvoiceListComponent } from './components/user/invoice-list/invoice-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { ZipcodeComponent } from './components/home/zipcode/zipcode.component';
import { InfoCardsComponent } from './components/home/info-cards/info-cards.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTableModule } from '@angular/material/table';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ConsultationFormComponent } from './components/consultation-form/consultation-form.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';



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
    ConsultationComponent,
    ConsultationFormComponent,
    RegistrationFormComponent,
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
    CdkAccordionModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { RegisterComponent } from './components/user/register/register.component';
import { InvoiceComponent } from './components/user/invoice/invoice.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "", component: HomePageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "invoices", component: InvoiceComponent},
  {path: "about-us", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

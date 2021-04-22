import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { CardPageComponent } from './card-page/card-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { AuthGuard } from './authentication/service/auth-guard.service';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'ticket', component: TicketComponent },
  { path: ':id', component: CardPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

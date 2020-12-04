import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { CardPageComponent } from './card-page/card-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardsComponent },
  { path: ':id', component: CardPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

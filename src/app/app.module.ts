import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CardPageComponent } from './card-page/card-page.component';

import { UselessPipe } from './pipe/custom-string.pipe';
import { LoginPageComponent } from './authentication/login-page/login-page.component'
import { AuthGuard } from './authentication/service/auth-guard.service';
import { AuthenticationService } from './authentication/service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    ProgressBarComponent,
    NavbarComponent,
    CardsComponent,
    CardLayoutComponent,
    CardPageComponent,
    UselessPipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFirestoreModule 
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

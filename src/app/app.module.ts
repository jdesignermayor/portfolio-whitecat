import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderMenuToggleComponent } from './header-menu-toggle/header-menu-toggle.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    HomeComponent,
    HeaderMenuToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

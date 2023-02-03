import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingComponent } from './rating/rating.component';
import { UnitComponent } from './unit/unit.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ButtonCountdownComponent } from './button-countdown/button-countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingComponent,
    UnitComponent,
    CountdownComponent,
    ButtonCountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ttToggleDirective } from './ttToggleDirective';
import { ttIfDirective } from './tt-if.directive';
import { ttClassDirective } from './tt-class.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ttTooltipDirective } from './tt-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ttClassDirective,
    ttIfDirective,
    ttToggleDirective,
    ttTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

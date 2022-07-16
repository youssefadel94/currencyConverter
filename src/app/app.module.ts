import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyConversionService } from '@aspire.software/angular-currency-converter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CurrencyConversionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

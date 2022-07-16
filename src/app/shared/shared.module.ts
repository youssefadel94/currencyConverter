import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyInputComponent,
    CurrenciesComponent,
    CurrencyCardComponent,
  ],
  exports: [CurrencyInputComponent, CurrenciesComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}

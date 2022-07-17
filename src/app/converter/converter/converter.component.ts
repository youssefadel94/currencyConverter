import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import {
  currencyRate,
  CurrencyService,
} from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  currencies: Observable<currencyRate> = new Observable<currencyRate>();
  loading = false;
  currency = {
    key: 'EUR',
    value: 1,
  };
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.currencies = this.currencyService.getLatestRates().pipe(
      map((res) => res.rates),
      tap(() => (this.loading = false))
    );
    this.currencyService.getSelectedCurrency().subscribe((res) => {
      this.currency = res;
    });
    // this.currencies.subscribe((res) => console.log(res));
  }

  inputChange($event: number) {
    this.loading = true;
    this.currencies = this.currencyService
      .convertWithLatestRates($event, this.currency.key)
      .pipe(
        map((res) => res.rates),
        tap(() => (this.loading = false))
      );
  }
  currencySelected(cur: KeyValue<string, number>) {
    this.currencyService.setSelectedCurrency(cur);
  }
}

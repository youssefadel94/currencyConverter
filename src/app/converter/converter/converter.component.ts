import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
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
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies = this.currencyService
      .getLatestRates()
      .pipe(map((res) => res.rates));
    this.currencies.subscribe((res) => console.log(res));
  }

  ipnutChange($event: number) {}
}



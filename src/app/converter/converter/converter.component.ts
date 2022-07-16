import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.currencies = this.currencyService.getLatestRates();
  }

  ipnutChange($event: number) {}
}



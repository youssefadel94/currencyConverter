import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currencyRate } from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {
  @Input() currencies: Observable<currencyRate> =
    new Observable<currencyRate>();
  constructor() {}

  ngOnInit(): void {}
}

import { trigger, transition, style, animate } from '@angular/animations';
import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currencyRate } from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      // transition(':leave', [
      //   style({ opacity: 1 }),
      //   animate('0.5s ease-in', style({ opacity: 0 })),
      // ]),
    ]),
  ],
})
export class CurrenciesComponent implements OnInit {
  @Input() currencies: Observable<currencyRate> =
    new Observable<currencyRate>();
  constructor() {}

  ngOnInit(): void {}

  // onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
  //   return -1;
  // }
  //put on top function just like on compare but to put USD and GBP and AUD and INR and RMB and YEN on top
  onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    if (
      _left.key === 'USD' ||
      _left.key === 'GBP' ||
      _left.key === 'AUD' ||
      _left.key === 'INR' ||
      _left.key === 'RMB' ||
      _left.key === 'YEN'
    ) {
      return -1;
    } else if (
      _right.key === 'USD' ||
      _right.key === 'GBP' ||
      _right.key === 'AUD' ||
      _right.key === 'INR' ||
      _right.key === 'RMB' ||
      _right.key === 'YEN'
    ) {
      return 1;
    } else {
      return 0;
    }
  }
}

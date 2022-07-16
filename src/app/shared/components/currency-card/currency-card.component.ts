import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency: { key: string; value: number } = { key: 'EUR', value: 1 };
  constructor() {}

  ngOnInit(): void {}
}

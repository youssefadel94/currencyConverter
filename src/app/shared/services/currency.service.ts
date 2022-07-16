import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'https://api.exchangerate.host/';
const latest = `${api}latest`;

export interface currencyRate {
  [currency: string]: number;
}
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getLatestRates(currency: string = 'EUR') {
    return this.http.get<currencyRate>(`${latest}?base=${currency}`);
  }
  convertWithLatestRates(amout: number, currency: string = 'EUR') {
    return this.http.get<currencyRate>(
      `${latest}?base=${currency}&amount=${amout}`
    );
  }
}

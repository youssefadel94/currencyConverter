import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'https://api.exchangerate.host/';
const fixerApi = 'https://fixer.io/';
const latest = `${api}latest`;
const fixerLatest = `${fixerApi}latest`;
const fixer = false;
// can separate in separate into variables file
const token = '';
export interface currencyRate {
  [currency: string]: number;
}
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  static getFixer() {
    return fixer;
  }
  static getToken() {
    return token;
  }
  constructor(private http: HttpClient) {}
  getLatestRates(currency: string = 'EUR') {
    return fixer
      ? this.getFixerLatestRates()
      : this.http.get<{ rates: currencyRate }>(`${latest}?base=${currency}`);
  }
  convertWithLatestRates(amount: number, currency: string = 'EUR') {
    return fixer
      ? this.convertWithFixerLatestRates(amount)
      : this.http.get<{ rates: currencyRate }>(
          `${latest}?base=${currency}&amount=${amount}`
        );
  }
  getFixerLatestRates(currency: string = 'EUR') {
    return this.http.get<{ rates: currencyRate }>(
      `${fixerLatest}?base=${currency}`
    );
  }
  convertWithFixerLatestRates(amout: number, currency: string = 'EUR') {
    return this.http.get<{ rates: currencyRate }>(
      `${fixerLatest}?base=${currency}&amount=${amout}`
    );
  }
}

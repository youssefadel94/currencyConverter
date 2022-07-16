import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  @Input() loading = false;
  delayTimer = setTimeout(function () {}, 1000);
  constructor() {}

  ngOnInit(): void {}
  inputChange($event: any) {
    clearTimeout(this.delayTimer);
    let that = this;
    this.delayTimer = setTimeout(function () {
      that.onChange.emit($event.target.value);
    }, 200);
  }
}

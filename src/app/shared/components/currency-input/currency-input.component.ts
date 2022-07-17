import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  @Input() loading = false;
  @Input() currency = {
    key: 'EUR',
    value: 1,
  };
  delayTimer = setTimeout(function () {}, 1000);

  // form group with control value amount
  form = new FormBuilder().group({
    amount: [
      1,
      [
        Validators.required,
        Validators.min(0.01),
        Validators.max(100000000000000000000),
      ],
    ],
  });
  error: string = '';
  constructor() {}

  ngOnInit(): void {
    let amount = this.form.get('amount');
    amount?.valueChanges.subscribe((value) => {
      if (!amount?.errors) {
        this.inputChange({ target: { value } });
        this.error = '';
      } else this.error = 'invalid amount';
    });
  }
  inputChange($event: any) {
    clearTimeout(this.delayTimer);
    let that = this;
    this.delayTimer = setTimeout(function () {
      that.onChange.emit($event.target.value);
    }, 100);
  }
}

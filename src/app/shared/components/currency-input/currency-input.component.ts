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
  delayTimer = setTimeout(function () {}, 1000);

  // form group with control value amount
  form = new FormBuilder().group({
    amount: [1, [Validators.required, Validators.min(1)]],
  });
  constructor() {}

  ngOnInit(): void {
    this.form.get('amount')?.valueChanges.subscribe((value) => {
      this.inputChange({ target: { value } });
    });
  }
  inputChange($event: any) {
    clearTimeout(this.delayTimer);
    let that = this;
    this.delayTimer = setTimeout(function () {
      that.onChange.emit($event.target.value);
    }, 200);
  }
}

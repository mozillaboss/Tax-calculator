import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css'],
})
export class FilingTypeComponent implements OnInit {
  @Input() form: any;
  favoriteSeason: string | undefined;
  filingType = [
    { key: '0', value: 'Ordinary Filing', checked: true },
    { key: '1', value: 'Additional Filing', checked: false },
  ];

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {}

  checkValue(event: any) {
    console.log('event.value', event.value);
    if (event.value == 'Additional Filing') {
      this.form.patchValue({
        surCharge: 0,
        penalty: 0,
      });
      var sa = this.form.value.saleAmount;
      if (sa) {
        var sar = sa.replace(',', '');
        var sav = parseFloat(sar) * 0.07;
        this.form.patchValue({
          totalAmount: this.currencyPipe.transform(sav, ' '),
        });
      }
    } else {
      var sa = this.form.value.saleAmount;
      this.form.patchValue({
        surCharge: '',
        penalty: 200,
      });
      if (sa) {
        var sar = sa.replace(',', '');
        var sav = parseFloat(sar) * 0.07;
        var sur = sav * 0.01;
        var total = sav + sur + 200.0;
        this.form.patchValue({
          saleAmount: this.currencyPipe.transform(sar, ' '),
          taxAmount: this.currencyPipe.transform(sav, ' '),
          surCharge: this.currencyPipe.transform(sur, ' '),
          penalty: 200,
          totalAmount: this.currencyPipe.transform(total, ' '),
        });
      }
    }
  }
}

import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-computation',
  templateUrl: './tax-computation.component.html',
  styleUrls: ['./tax-computation.component.css'],
})
export class TaxComputationComponent implements OnInit {
  @Input() form: any;
  public group: FormGroup | undefined;

  surCharge: any;

  stockTax: any;

  isError = false;

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {}

  calTotalVAT() {
    var sa = this.form.value.saleAmount;
    var sav = sa * 0.07;
    var sur = sav * 0.01;
    var total = sav + sur + 200.00;
    this.stockTax = this.currencyPipe.transform(sav, ' ');

    this.form.patchValue({
      saleAmount: this.currencyPipe.transform(sa, ' '),
      taxAmount: this.currencyPipe.transform(sav, ' '),
      surCharge: this.currencyPipe.transform(sur, ' '),
      totalAmount: this.currencyPipe.transform(total, ' '),
    });

  }

  calTax(event: any) {
    console.log("event", event.target.value);
    console.log("tax form", this.form.value);
    var stre = this.stockTax.replace(',', '');
    var diff = parseFloat(stre) - event.target.value;
    this.form.patchValue({
      taxAmount: this.currencyPipe.transform(event.target.value, ' '),
    });
    if(diff > 20 || diff < -20){
      this.form.controls['taxAmount'].setErrors({'incorrect': true});
      this.isError = true;
    } else {
      this.form.controls['taxAmount'].setErrors(null);
      this.isError = false;
    }
  }

}

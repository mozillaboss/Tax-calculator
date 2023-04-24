import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CurrencyPipe, formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tax-Calculater';

  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  now = new Date();
  todaysDataTime = "";

  firstFormGroup = this._formBuilder.group({
    filingType: ['0', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
    type: [''],
    saleAmount: [''],
    taxAmount: [''],
    surCharge: [''],
    penalty: ['200.00'],
    totalAmount: ['']
  });

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
    setInterval(() => {
      this.todaysDataTime = this.now.toLocaleDateString("en-US");
    }, 1);
  }

  TestValue(){
    console.log('firstFormGroup', this.firstFormGroup);
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      data: {form: JSON.stringify(this.firstFormGroup.value)},
    });
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog/dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}

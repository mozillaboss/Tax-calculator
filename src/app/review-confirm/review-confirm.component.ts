import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent implements OnInit {

  @Input() form : any;

  ft = 'Ordinary Filing';
  monthSelect = '';
  yearSelect = '';

  filingType = [
    {key: '0', value: 'Ordinary Filing', 'checked': true},
    {key: '1', value: 'Additional Filing', 'checked': false}
  ];

  month = [
    {ID: "01", value: "January", select: false},
    {ID: "02", value: "Febuary", select: false},
    {ID: "03", value: "March", select: false},
    {ID: "04", value: "April", select: false},
    {ID: "05", value: "May", select: false},
    {ID: "06", value: "June", select: false},
    {ID: "07", value: "July", select: false},
    {ID: "08", value: "August", select: false},
    {ID: "09", value: "September", select: false},
    {ID: "10", value: "October", select: false},
    {ID: "11", value: "November", select: false},
    {ID: "12", value: "December", select: false}
  ];

  constructor() { }

  ngOnInit(): void {
    this.form.controls['filingType'].valueChanges.subscribe((val : any) => {
      this.ft = val;
    });
    this.form.controls['month'].valueChanges.subscribe((val : any) => {
      this.monthSelect = val;
    });
    this.form.controls['year'].valueChanges.subscribe((val : any) => {
      this.yearSelect = val;
    });
  }

}

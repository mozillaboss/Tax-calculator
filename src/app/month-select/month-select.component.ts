import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {

  @Input() form: any;
  disableSelect = new FormControl(false);
  now = new Date();

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

  year: string[] = [];

  type: string[] = [
    'On-Time'
  ];

  constructor() {
    var cm = this.now.getMonth() + 1;
    var cy = this.now.getFullYear();
    var countloop = cy - 2019;
    console.log("countloop", countloop);

    this.month.forEach(month => {
      if (parseInt(month.ID) > cm) {
        month.select = true;
      }
    });

    for(var i = 0; i < countloop; i++) {
      var cys = cy - i;
      this.year.push(cys.toString());
    }

  }

  ngOnInit(): void {
  }


}

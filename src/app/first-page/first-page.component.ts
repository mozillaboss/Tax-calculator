import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  @Input() taxform: any;
  constructor() { }

  ngOnInit(): void {
  }

}

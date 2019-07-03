import { Component } from '@angular/core';
import { Fn } from '@iapps/function-analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    if (Fn) {
      Fn.init({
        baseUrl: '../../../api/'
      });
    }
  }
  title = 'ngx-dhis2-period-filter';
  periodObject: any;
  action: string;
  periodFilterConfig = {
    singleSelection: false
  };
  selectedPeriodItems: any[] = [
    { id: 2016 },
    { id: '201801' },
    { id: 'THIS_MONTH' },
    { id: 'THIS_QUARTER' },
    { id: 'THIS_YEAR' },
    { id: '201901B' },
    { id: '2019Q4' },
    { id: '2019S1' },
    { id: '2019AprilS1' },
    { id: '2019April' },
    { id: '2019July' },
    { id: '2019Oct' },
    { id: 'THIS_WEEK' },
    { id: 'THIS_BIMONTH' },
    { id: 'THIS_FINANCIAL_YEAR' }
  ];

  onPeriodUpdate(periodObject, action) {
    console.log(periodObject);
    this.periodObject = periodObject;
    this.action = action;
  }
}

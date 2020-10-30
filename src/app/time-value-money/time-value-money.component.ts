import { Component } from '@angular/core';
// @ts-ignore
import  Finance  from '../../../node_modules/tvm-financejs/';

@Component({
  selector: 'app-time-value-money',
  templateUrl: './time-value-money.component.html',
  styleUrls: ['./time-value-money.component.css']
})
export class TimeValueMoneyComponent {

  finance = new Finance();

  presentValue = 0;
  futureValue = 0;
  payments = 0;
  numPeriods = 0;
  rate = 0;
  begin = 0;

  tvmRadio = 0;

  calculaValorPresente() {
    this.presentValue = this.finance.PV(this.rate, this.numPeriods, this.payments, this.futureValue, this.begin)
  }

}

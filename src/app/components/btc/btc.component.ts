import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css']
})
export class BtcComponent implements OnInit {

  public static get info(): Card {
    return {title: 'Bitcoin Ticker', description: 'Tells u bitcoin stuff', component: BtcComponent};
  }
  constructor() { }

  ngOnInit() {
  }
}

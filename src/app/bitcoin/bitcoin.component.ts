import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  public btcToUsd: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPrice();
  }

  getPrice() {
    this.http.get('https://blockchain.info/ticker').subscribe((data: any) => {
      this.btcToUsd = data.USD.last;
    });
  }

}

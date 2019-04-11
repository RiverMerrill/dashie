import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { RemoveCard } from '../../actions/card.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  card$: Observable<Card[]>;

  constructor(private store: Store<AppState>) {
   this.card$ = store.select('card');
   this.card$.subscribe(data => {
     console.log(data);
   });
  }

  ngOnInit() {
  }

  removeCard(i) {
      this.store.dispatch(new RemoveCard(i));
  }

}

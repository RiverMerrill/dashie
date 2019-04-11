import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddCard } from '../../actions/card.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cards: Card[];
  constructor(private store: Store<AppState>) {
      this.cards = [
        {title: 'Card 1', description: 'Death'},
        {title: 'Card 2', description: 'Famine'},
        {title: 'Card 3', description: 'War'},
        {title: 'Card 4', description: 'Conquest'}
      ];
  }

  ngOnInit() {
  }

  addCard(card: Card) {
      this.store.dispatch(new AddCard(card));
  }
}

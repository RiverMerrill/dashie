import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { DefaultCards } from '../../state/default-cards';
import { Store } from '@ngxs/store';
import { AddCard } from '../../actions/card.actions';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public cards: Card[] = DefaultCards.cards;

    constructor(private store: Store) {}

    ngOnInit() {
    }

    addCard(card: Card) {
        this.store.dispatch(new AddCard(card));
    }
}

import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { DefaultCards } from '../../state/default-cards';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public cards: Card[];

    constructor() {
        this.cards = DefaultCards.cards;

        const newVar = {
            name: 'test',
            something: 'test2'
        };
    }

    ngOnInit() {
    }
}

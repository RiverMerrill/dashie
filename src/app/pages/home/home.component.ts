import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Card } from '../../models/card.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public userCards$: Observable<Card[]>;

    constructor(private store: Store) {
        this.userCards$ = this.store.select(state => state.cards.userCards);
    }

    ngOnInit() {
    }

}

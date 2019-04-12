import { Card } from '../models/card.model';
import { Action, State, StateContext } from '@ngxs/store';
import { AddCard, RemoveCard } from '../actions/card.actions';

export class CardStateModel {
    cardsList: Card[];
    userCards: Card[];
}

@State<CardStateModel>({
    name: 'cards',
    defaults: {
        cardsList: [
            {title: 'Card 1', description: 'Death'},
            {title: 'Card 2', description: 'Famine'},
            {title: 'Card 3', description: 'War'},
            {title: 'Card 4', description: 'Conquest'}
        ],
        userCards: []
    }
})

export class CardState {
    @Action(AddCard)
    add({getState, patchState}: StateContext<CardStateModel>, {payload}: AddCard) {
        patchState({
            userCards: [...getState().userCards, payload]
        });
    }

    @Action(RemoveCard)
    remove({getState, patchState}: StateContext<CardStateModel>, {payload}: RemoveCard) {
        console.log(payload);
        getState().userCards.splice(payload, 1);
    }
}

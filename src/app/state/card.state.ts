import { Card } from '../models/card.model';
import { Action, State, StateContext } from '@ngxs/store';
import { AddCard, RemoveCard } from '../actions/card.actions';
import { patch } from '@ngxs/store/operators';

export class CardStateModel {
    cardsList: Card[];
    userCards: Card[];
}

@State<CardStateModel>({
    name: 'cards',
    defaults: {
        userCards: [],
        cardsList: [
            {title: 'Card 1', description: 'Death'},
            {title: 'Card 2', description: 'Famine'},
            {title: 'Card 3', description: 'War'},
            {title: 'Card 4', description: 'Conquest'}
        ]
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
        const tempCards = getState().userCards;
        tempCards.splice(payload, 1);
        patchState({
            userCards: tempCards
        });
    }
}


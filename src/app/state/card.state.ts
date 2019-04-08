import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Card } from '../models/card.model';
import { AddCard, RemoveCard } from '../actions/card.actions';
import { DefaultCards } from './default-cards';

export class CardStateModel {
    cards: Card[];
    userCards: Card[];
}

@State<CardStateModel>({
    name: 'cards',
    defaults: {
        cards: DefaultCards.cards,
        userCards: []
    }
})

export class CardState {
    @Selector()
    static getCards(state: CardStateModel) {
        return state.cards;
    }

    @Action(AddCard)
    add({getState, patchState}: StateContext<CardStateModel>, {payload}: AddCard) {
        const state = getState();
        patchState({
            userCards: [...state.userCards, payload]
        });
    }

    @Action(RemoveCard)
    remove({getState, patchState}: StateContext<CardStateModel>, {payload}: RemoveCard) {
        patchState({
            userCards: getState().userCards.filter(a => a.title !== payload)
        });
    }
}

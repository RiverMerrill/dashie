import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Card } from '../models/card.model';
import { AddCard, RemoveCard } from '../actions/card.actions';
import { DefaultCards } from './default-cards';

export class CardStateModel {
    cards: Card[];
}

@State<CardStateModel>({
    name: 'userCards',
    defaults: {
        cards: DefaultCards.cards
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
            cards: [...state.cards, payload]
        });
    }

    @Action(RemoveCard)
    remove({getState, patchState}: StateContext<CardStateModel>, {payload}: RemoveCard) {
        patchState({
            cards: getState().cards.filter(a => a.title !== payload)
        });
    }
}

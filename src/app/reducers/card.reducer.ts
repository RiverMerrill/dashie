import { Card } from '../models/card.model';
import * as CardActions from '../actions/card.actions';

const initialState: Card = {
    title: 'An Card',
    description: 'just an card, nothin\' to see here.'
};

export function cardReducer(state: Card[] = [initialState], action: CardActions.Actions) {
    switch (action.type) {
        case CardActions.ADD_CARD:
            return [...state, action.payload];
        case CardActions.REMOVE_CARD:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
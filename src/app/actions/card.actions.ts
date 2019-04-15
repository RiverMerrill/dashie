import { Card } from '../models/card.model';

export class AddCard {
   static readonly type = '[CARD] Add';
   constructor(public payload: Card) {}
}

export class RemoveCard {
    static readonly type = '[CARD] Remove';
    constructor(public payload: number) {}
}

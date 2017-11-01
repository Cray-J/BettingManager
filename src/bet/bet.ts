import { BetType } from './bet-type.enum';
import { Outcome } from './outcome';

export class Bet {
  constructor(
    public id?: number,
    public match?: string,
    public matchdate?: string,
    public placed_bet?: BetType,
    public odds?: number,
    public date?: Date,
    public stake?: number,
    public outcome?: Outcome,
    public league?: string,
    public result?: string,
    public red_card?: boolean,
    public missed_penalty?: boolean,
    public valueReturn?: number
  ) {}
}



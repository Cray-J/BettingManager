import { BetType } from './bet-type.enum';
import { Outcome } from './outcome';
import { Bookie } from './bookie.enum';

export class Bet {
    public id?: number;
    public match?: string;
    public matchdate?: string;
    public selection?: BetType;
    public bookie?: Bookie;
    public odds: number;
    public stake: number;
    public outcome?: Outcome;
    public league?: string;
    public result?: string;
    public live = false;
    public red_card = false;
    public missed_penalty =  false;
    public valueReturn?: number;


  constructor() {}
}



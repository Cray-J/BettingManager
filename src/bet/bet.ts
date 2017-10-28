import {BetType} from './bet-type';
import {Outcome} from './outcome';

export interface Bet {
  id: number;
  match: string;
  matchdate: string;
  placed_bet: string;
  odds: number;
  stake: number;
  outcome: string;
  league: string;
  result: string;
  red_card: boolean;
  missed_penalty: boolean;
}



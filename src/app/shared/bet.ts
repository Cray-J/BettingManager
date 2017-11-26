
export class Bet {
    public match?: string;
    public matchdate?: string;
    public selection?: string;
    public bookie?: string;
    public odds: number;
    public stake: number;
    public outcome?: string;
    public league?: string;
    public result?: string;
    public live = false;
    public red_card = false;
    public missed_penalty =  false;
    public valueReturn?: number;


  constructor() {}

  public fromJson(json: JSON) {
    this.match = json['match'];
    this.matchdate = json['matchdate'];
    this.selection = json['selection'];
    this.bookie = json['bookie'];
    this.odds = json['odds'];
    this.stake = json['stake'];
    this.outcome = json['outcome'];
    this.league = json['league'];
    this.result = json['result'];
    this.live = json['live'];
    this.red_card = json['red_card'];
    this.missed_penalty = json['missed_penalty'];
    this.valueReturn = json['missed_penalty'];

}
}



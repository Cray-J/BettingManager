
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

}
}




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

  public fromJson(json: any): Bet {
    if (!json) {
      return;
    }

    console.log(json['match']);

    const bet = new Bet();
    bet.match = json['match'];
    bet.matchdate = json['matchdate'];
    bet.selection = json['selection'];
    bet.odds = json['odds'];
    bet.stake = json['stake'];
    bet.outcome = json['outcome'];


    return bet;
  }
}


/**
 *public static fromJson(json: any): Contract {
        if (!json) {
            return;
        }

        const contract = new Contract(new RootEntity(json));
        const factors = json['factors'];
        if (factors) {
            contract.surfProtFactorOfStruct = Contract.toQuantity(factors['surfProtFactorOfStruct']);
            contract.pipingContentFactor = Contract.toQuantity(factors['pipingContentFactor']);
            contract.allowance = Contract.toQuantity(factors['allowance']);
            if (!isNullOrUndefined(factors['peopleOnBoard'])) {
                contract.peopleOnBoard = factors['peopleOnBoard'].value;
            }
            contract.tonsPerPerson = Contract.toQuantity(factors['tonsPerPerson']);
            contract.weightReservesFactor = Contract.toQuantity(factors['weightReservesFactor']);
            contract.companyFutureReserves = Contract.toQuantity(factors['companyFutureReserves']);
        }

        const instrumentFactors = json['instrumentFactors'];
        if (instrumentFactors) {
            contract.instrumentFactorOfPipingWellbay = Contract.toQuantity(instrumentFactors['wellbay']);
            contract.instrumentFactorOfPipingProcess = Contract.toQuantity(instrumentFactors['process']);
            contract.instrumentFactorOfPipingUtility = Contract.toQuantity(instrumentFactors['utility']);
            contract.instrumentFactorOfPipingRiser = Contract.toQuantity(instrumentFactors['riser']);
        }

        const splitFactors = json['splitFactors'];
        if (splitFactors) {
            contract.splitFactorsPrimary = Contract.toQuantity(splitFactors['prim']);
            contract.splitFactorsSecondary = Contract.toQuantity(splitFactors['second']);
            contract.splitFactorsOutfitting = Contract.toQuantity(splitFactors['outfit']);
        }

        const characteristics = json['characteristics'];
        for (const characteristic of characteristics) {
            if (characteristic.id === 'concept') {
                contract.concept = characteristic.value.id;
            }

            if (characteristic.id === 'numberOfWells' && !isNullOrUndefined(characteristic.value)) {
                contract.numberOfWells = characteristic.value.value;
            }

            if (characteristic.id === 'drilling') {
                if (isNullOrUndefined(characteristic.value)) {
                    contract.drilling = null;
                } else if (characteristic.value.value === 1) {
                    contract.drilling = true;
                } else if (characteristic.value.value === 0) {
                    contract.drilling = false;
                }
            }

            if (characteristic.id === 'utility') {
                contract.utility = characteristic.value.id;
            }

            if (characteristic.id === 'wellType') {
                contract.wellType = characteristic.value.id;
            }

            if (characteristic.id === 'topsideArrivalPressure') {
                contract.topsideArrivalPressure = characteristic.value.id;
            }

            if (characteristic.id === 'processingCapacityOil') {
                contract.processingCapacityOil = characteristic.value.id;
            }

            if (characteristic.id === 'processingCapacityGas') {
                contract.processingCapacityGas = characteristic.value.id;
            }

            if (characteristic.id === 'integratedStructure') {
                if (isNullOrUndefined(characteristic.value)) {
                    contract.integratedStructure = null;
                } else if (characteristic.value.value === 1) {
                    contract.integratedStructure = true;
                } else if (characteristic.value.value === 0) {
                    contract.integratedStructure = false;
                }
            }

            if (characteristic.id === 'modularizedStructure') {
                if (isNullOrUndefined(characteristic.value)) {
                    contract.modularizedStructure = null;
                } else if (characteristic.value.value === 1) {
                    contract.modularizedStructure = true;
                } else if (characteristic.value.value === 0) {
                    contract.modularizedStructure = false;
                }
            }
        }

        return contract;
    }
 *
 *
 *
 *
 *
 *  public toJson(): any {
        return {
            type: 'DesignBasis',
            projectName: this.id.projectName,
            concept: this.id.concept,
            sensitivity: this.id.sensitivity,
            revision: this.id.revision,
            version: this.id.version,
            factors: {
                surfProtFactorOfStruct: Contract.toJsonQuantity(this.surfProtFactorOfStruct, 'percent'),
                pipingContentFa
 */


export class FuelCalculator{
    modulesdata: string[];
    constructor(input: string){
        this.modulesdata = input.split('\n');
    }

    doMath(modulefuel: number){
        let result: number = Math.floor(modulefuel / 3) - 2;
        let total: number = result;
        while(result > 6){
            result = Math.floor(result / 3) - 2;
            total += result;
        }
        return total;
    }

    calculateFuelNeeded(){
        let fuelneeded: number = 0;
        for (let module = 0; module < this.modulesdata.length; module++){
            fuelneeded += this.doMath(Number(this.modulesdata[module]));
        }
        return fuelneeded;
    }
}
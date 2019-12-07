import { enumNumberMember, thisExpression, EnumNumberMember } from "@babel/types";

export class PasswordDecrypter{
    inputrange: string[];
    numberofpasswords: number;
    constructor(input: string){
        this.inputrange = input.split('-');
        this.numberofpasswords = 0;
    }

    decrypt(){
        let initialvalue: number = Number(this.inputrange[0]);
        let finalvalue: number = Number(this.inputrange[1]);
        for(let value: number = initialvalue; value < finalvalue; value++){
            this.checkRules(value);
        }
        return this.numberofpasswords;
    }

    checkRules(value: number){
        if( this.hasAdjacent(value) && this.noDecrease(value)){
            this.numberofpasswords++;
        }
    }

    hasAdjacent(value: number){
        var double: number = 0;
        var triple: number = 0;
        var valuestring: string = String(value);
        var numbersread: string[] = [valuestring[valuestring.length-1]];
        for( let digitPointer: number = valuestring.length-2; digitPointer >= 0; digitPointer --){
            var actualdigit: string = valuestring.charAt(digitPointer)
            if (numbersread[0] == actualdigit){
                double++;
                if (numbersread[1] == actualdigit){
                    double = double - 2;
                    double = double + triple;
                    triple = 1;
                }
            }
            numbersread.unshift(actualdigit);
        }
        return double;
    }

    noDecrease(value: number){
        var valuestring: string = String(value);
        var numbersread: string[] = [valuestring[valuestring.length-1]];
        for( let digitPointer: number = valuestring.length-2; digitPointer >= 0; digitPointer --){
            var actualdigit: string = valuestring.charAt(digitPointer)
            if (numbersread[0] < actualdigit){
                return 0; 
            }
            numbersread.unshift(actualdigit);
        }
        return 1;
    }
}
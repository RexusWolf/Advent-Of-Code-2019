import { thisTypeAnnotation, existsTypeAnnotation, returnStatement, stringLiteral } from "@babel/types";

export class IntCode {
    splittedInput: number[];
    saveInput: string;
    desiredOutput: string;

    constructor(input: string, changeInput: boolean = false, output: string = '19690720', noun: number = 12, verb: number = 2){
        this.splittedInput = input.split(",").map(Number);
        this.saveInput = input;
        this.desiredOutput = output;
        if (changeInput){
            this.splittedInput[1] = noun;
            this.splittedInput[2] = verb;
        }
    }

    tryPair(){
        for (let noun = 0; noun < 100; noun++){
            for(let verb = 0; verb < 100; verb++){                
                var newcode = new IntCode(this.saveInput, true, '19690720', noun, verb)
                var newoutput: string = newcode.executeIntCode();
                var outputSplitted : string[] = newoutput.split(',');
                if( outputSplitted[0] == this.desiredOutput){
                    return 100 * noun + verb;
                }
            }
        }
    }

    executeIntCode(){
        let index: number = 0;
        while(this.splittedInput[index] != 99){
            let result: number = 0;
            switch(this.splittedInput[index]){  
                case 1:
                    result = this.splittedInput[this.splittedInput[index+1]] + this.splittedInput[this.splittedInput[index+2]];
                    this.splittedInput[this.splittedInput[index+3]] = result;
                    break;
                case 2:
                    result = this.splittedInput[this.splittedInput[index+1]] * this.splittedInput[this.splittedInput[index+2]];
                    this.splittedInput[this.splittedInput[index+3]] = result;
                    break;
            }
            index += 4;
        }
        
        return this.splittedInput.map(String).join();
    }
}
import { thisTypeAnnotation, existsTypeAnnotation, returnStatement, stringLiteral } from "@babel/types";

export class Opcode {
    splittedInput: number[];
    saveInput: number[];
    desiredOutput: string;

    constructor(input: string, changeInput: boolean, output: string = '0', noun: number = 12, verb: number = 2){
        this.splittedInput = input.split(",").map(Number);
        this.saveInput = input.split(",").map(Number);
        this.desiredOutput = output;
        if (changeInput){
            this.splittedInput[1] = noun;
            this.splittedInput[2] = verb;
        }
    }

    tryPair(){
        for (let noun = 0; noun < 100; noun++){
            for(let verb = 0; verb < 100; verb++){                
                var newcode = new Opcode('1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,9,23,27,2,27,6,31,1,5,31,35,2,9,35,39,2,6,39,43,2,43,13,47,2,13,47,51,1,10,51,55,1,9,55,59,1,6,59,63,2,63,9,67,1,67,6,71,1,71,13,75,1,6,75,79,1,9,79,83,2,9,83,87,1,87,6,91,1,91,13,95,2,6,95,99,1,10,99,103,2,103,9,107,1,6,107,111,1,10,111,115,2,6,115,119,1,5,119,123,1,123,13,127,1,127,5,131,1,6,131,135,2,135,13,139,1,139,2,143,1,143,10,0,99,2,0,14,0', true, '19690720', noun, verb)
                var newoutput: string = newcode.executeOpCode();
                var outputSplitted : string[] = newoutput.split(',');
                if( outputSplitted[0] == this.desiredOutput){
                    return 100 * noun + verb;
                }
            }
        }
    }

    setParameters(noun: number, verb: number){
        this.splittedInput[1] = noun;
        this.splittedInput[2] = verb;
    }

    resetInput(){
        this.splittedInput = this.saveInput;
    }

    executeOpCode(){
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
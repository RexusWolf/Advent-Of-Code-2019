import { thisTypeAnnotation, existsTypeAnnotation, returnStatement } from "@babel/types";

export class Opcode {
    splittedInput: number[];
    constructor(input: string, changeInput: boolean){
        this.splittedInput = input.split(",").map(Number);
        if (changeInput){
            this.splittedInput[1] = 12;
            this.splittedInput[2] = 2;
        }
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
import { PasswordDecrypter } from "./Day4";

describe('PasswordDecrypter', () => {
    it('should return', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        expect(passworddecrypter.decrypt()).toBe(2002);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 224175;
        expect(passworddecrypter.hasAdjacent(value)).toBe(1);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 212175;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 12345;
        expect(passworddecrypter.noDecrease(value)).toBe(1);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 125345;
        expect(passworddecrypter.noDecrease(value)).toBe(0);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 222345;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })

    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 112233;
        expect(passworddecrypter.hasAdjacent(value)).toBe(3);
    })

    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 123444;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 111122;
        expect(passworddecrypter.hasAdjacent(value)).toBe(1);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 122221;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 111111;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 113331;
        expect(passworddecrypter.hasAdjacent(value)).toBe(1);
    })
    it('should be adjacent', () =>{
        let passworddecrypter = new PasswordDecrypter('108457-562041');
        let value: number = 111110;
        expect(passworddecrypter.hasAdjacent(value)).toBe(0);
    })
})

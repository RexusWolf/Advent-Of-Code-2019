import { FuelCalculator } from './Day1'

describe ('FuelCalculator', () => {
    it('should return 50346', () => {
        let fuelcalculator = new FuelCalculator('100756');
        expect(fuelcalculator.calculateFuelNeeded()).toBe(50346);
    })
})
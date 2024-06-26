import { add } from './main';

describe('add', () => {
    it('should return the sum of two numbers', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });

    it('should return 0 when both numbers are 0', () => {
        const result = add(0, 0);
        expect(result).toBe(0);
    });

    it('should return a negative number when one of the numbers is negative', () => {
        const result = add(-5, 3);
        expect(result).toBe(-2);
    });

    // Add more test cases as needed
});

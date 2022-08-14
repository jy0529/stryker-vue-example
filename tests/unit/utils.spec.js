import { fizzBuzz, isPrime } from '../../src/utils/index';
test('FizzBuzz test', () => {
    expect(fizzBuzz(15)).toBe('Fizz Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(4)).toBe(4);
});

test('isPrime test', () => {
    expect(isPrime(1)).toBe(false);
    // expect(isPrime(10)).toBe(false);
    expect(isPrime(11)).toBe(true);
});
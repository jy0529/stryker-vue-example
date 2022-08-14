export function fizzBuzz(n) {
    if (n % 15 === 0) {
        return 'Fizz Buzz';
    }
    if (n % 5 === 0) {
        return 'Buzz';
    }
    if (n % 3 === 0) {
        return 'Fizz';
    }
    return n;
}

export function isPrime(n) {
    if (n === 1) {
        return false;
    } else {
        for(let i = 2;i <= Math.trunc(Math.sqrt(n));i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}
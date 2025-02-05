// Write a generator function that yields a stream of prime numbers. The stream must be able to produce 25 million primes in seconds.

// https://www.codewars.com/kata/59122604e5bc240817000016

class PrimeBitSet {
    constructor(limit) {
        this.limit = limit;
        this.bitset = new Uint8Array(Math.ceil(limit / 2)).fill(1);
        this.bitset[0] = 0;

        for (let i = 3; i * i < limit; i += 2) {
            if (this.bitset[i >> 1]) {
                for (let j = i * i; j < limit; j += i * 2) {
                    this.bitset[j >> 1] = 0;
                }
            }
        }
    }

    isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        return n % 2 !== 0 && this.bitset[n >> 1] === 1;
    }
}

class Primes {
    static limit = 500000000;
    static bitset = new PrimeBitSet(Primes.limit);

    static *stream() {
        yield 2;
        for (let i = 3; i < Primes.limit; i += 2) {
            if (Primes.bitset.isPrime(i)) yield i;
        }
    }

    static nthPrime(n) {
        let count = 0;
        for (const prime of Primes.stream()) {
            count++;
            if (count === n) return prime;
        }
        return undefined;
    }
}
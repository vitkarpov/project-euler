## Smallest mupltiple

```
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
```

### Bruteforce

I can't event test a benchmark of it 'cause I have not enought patient. It's very slow.

### Not using computer at all

Firstly, you have to make a prime factorization of each number from 1 to 10.

```
20 = 2^2 * 5
19 = 19
18 = 3^2 * 2
17 = 17
16 = 2^4
15 = 3 * 5
14 = 2 * 7
13 = 13
11 = 11
```

All others are included into previous. Now we have to choose the greatest power of each prime divisor and mulpiple them each other.
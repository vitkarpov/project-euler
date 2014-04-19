## Sum square difference

```
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
```

###

Сomponents of the sum `(1 + 2 + 3 + ... + 100)^2` could be represented in a matrix:

```
1*1 1*2 1*3 ... 1*100
2*1 2*2 2*3 ... 2*100
3*1 2*3 3*3 ... 3*100
...
100*1 100*2 100*3 ... 100*100
```

Main diagonal contains squares which should be subtracted, so the problem is to find the sum of all other matrix's elements:

```
sum(k=1..100) sum(n=1..100) k*n, if n != k
```


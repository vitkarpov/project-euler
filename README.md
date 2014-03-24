## Project Euler

[Progress](http://projecteuler.net/profile/vitkarpov.png)

> Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics.

If you haven't heard about it, be sure to check out [About Project Euler](http://projecteuler.net/about)

### Benchmarking

Benchmarking is a really interesting and important part of solving the problems.

There is a special script `benchmark.js` which should be run under node. It accepts a task's folder name (path indeed, but it's the same in this case) and outputs measurment's results for each js file inside, so assuming there're different solutions of the same problem.

For instance

```
node benchmark.js \#1-Multiples-of-3-and-5\

Working. Please, wait...
arithmetic_progressions.js x 16,450,707 ops/sec ±0.46% (99 runs sampled)

Working. Please, wait...
obvious_bruteforce.js x 94,609 ops/sec ±0.25% (102 runs sampled)
```

Obviously bruteforce solution is really slower then using arithmetic progression.
## Project Euler

[Progress](http://projecteuler.net/profile/vitkarpov.png)

> Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics.

If you haven't heard about it, be sure to check out [About Project Euler](http://projecteuler.net/about)

### Bechmarking

Benchmarking is a really interesting and important part of solving the problems. There is a special script `benchmark.js` which should be run under node. It accepts a task's folder name (path indeed, but it's the same in this case) and output measurment's results for each js file inside assuming there're different solutions of the same problem.

```
node benchmark.js #1-Multiples-of-3-and-5
```
# superoptimizer-ts

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v0.6.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

Benchmark Bun against Node.js:

Node.js:

```bash
node src/index.js
🎯 Target state: [ 3, 3, 3, 3 ]
[SUPEROPTIMIZER] Programs generated: 100000
[SUPEROPTIMIZER] Programs generated: 200000
[SUPEROPTIMIZER] Programs generated: 300000
[SUPEROPTIMIZER] Programs generated: 400000
[SUPEROPTIMIZER] Programs generated: 500000
[SUPEROPTIMIZER] Programs generated: 600000
[SUPEROPTIMIZER] Programs generated: 700000
[SUPEROPTIMIZER] Programs generated: 800000
[SUPEROPTIMIZER] Programs generated: 900000
[SUPEROPTIMIZER] Programs generated: 1000000
[SUPEROPTIMIZER] Programs generated: 1100000
[SUPEROPTIMIZER] Programs generated: 1200000
[SUPEROPTIMIZER] Programs generated: 1300000
[SUPEROPTIMIZER] Programs generated: 1400000
[SUPEROPTIMIZER] Programs generated: 1500000
[SUPEROPTIMIZER] Programs generated: 1600000
[SUPEROPTIMIZER] Programs generated: 1700000
[SUPEROPTIMIZER] Programs generated: 1800000
[SUPEROPTIMIZER] Programs generated: 1900000
[SUPEROPTIMIZER] Programs generated: 2000000
[SUPEROPTIMIZER] Programs generated: 2100000
[SUPEROPTIMIZER] Programs generated: 2200000
[SUPEROPTIMIZER] Programs generated: 2300000
[SUPEROPTIMIZER] Programs generated: 2400000
[SUPEROPTIMIZER] Programs generated: 2500000
[SUPEROPTIMIZER] Programs generated: 2600000
[SUPEROPTIMIZER] Programs generated: 2700000
[SUPEROPTIMIZER] Programs generated: 2800000
[SUPEROPTIMIZER] Programs generated: 2900000
[SUPEROPTIMIZER] Programs generated: 3000000
[SUPEROPTIMIZER] Programs generated: 3100000
[SUPEROPTIMIZER] Programs generated: 3200000
[SUPEROPTIMIZER] Programs generated: 3300000
[SUPEROPTIMIZER] Programs generated: 3400000
[SUPEROPTIMIZER] Programs generated: 3500000
[SUPEROPTIMIZER] Programs generated: 3600000
⏱️ Execution duration: 2456ms
🤖 Superoptimized program:
[
  { opCode: 'LOAD', args: [ 3 ] },
  { opCode: 'XOR', args: [ 1, 0 ] },
  { opCode: 'XOR', args: [ 2, 0 ] },
  { opCode: 'XOR', args: [ 3, 0 ] }
]
```

Bun:

```bash
bun run src/index.ts
🎯 Target state: [ 3, 3, 3, 3 ]
[SUPEROPTIMIZER] Programs generated: 100000
[SUPEROPTIMIZER] Programs generated: 200000
[SUPEROPTIMIZER] Programs generated: 300000
[SUPEROPTIMIZER] Programs generated: 400000
[SUPEROPTIMIZER] Programs generated: 500000
[SUPEROPTIMIZER] Programs generated: 600000
[SUPEROPTIMIZER] Programs generated: 700000
[SUPEROPTIMIZER] Programs generated: 800000
[SUPEROPTIMIZER] Programs generated: 900000
[SUPEROPTIMIZER] Programs generated: 1000000
[SUPEROPTIMIZER] Programs generated: 1100000
[SUPEROPTIMIZER] Programs generated: 1200000
[SUPEROPTIMIZER] Programs generated: 1300000
[SUPEROPTIMIZER] Programs generated: 1400000
[SUPEROPTIMIZER] Programs generated: 1500000
[SUPEROPTIMIZER] Programs generated: 1600000
[SUPEROPTIMIZER] Programs generated: 1700000
[SUPEROPTIMIZER] Programs generated: 1800000
[SUPEROPTIMIZER] Programs generated: 1900000
[SUPEROPTIMIZER] Programs generated: 2000000
[SUPEROPTIMIZER] Programs generated: 2100000
[SUPEROPTIMIZER] Programs generated: 2200000
[SUPEROPTIMIZER] Programs generated: 2300000
[SUPEROPTIMIZER] Programs generated: 2400000
[SUPEROPTIMIZER] Programs generated: 2500000
[SUPEROPTIMIZER] Programs generated: 2600000
[SUPEROPTIMIZER] Programs generated: 2700000
[SUPEROPTIMIZER] Programs generated: 2800000
[SUPEROPTIMIZER] Programs generated: 2900000
[SUPEROPTIMIZER] Programs generated: 3000000
[SUPEROPTIMIZER] Programs generated: 3100000
[SUPEROPTIMIZER] Programs generated: 3200000
[SUPEROPTIMIZER] Programs generated: 3300000
[SUPEROPTIMIZER] Programs generated: 3400000
[SUPEROPTIMIZER] Programs generated: 3500000
[SUPEROPTIMIZER] Programs generated: 3600000
⏱️ Execution duration: 965ms
🤖 Superoptimized program:
[
  {
    opCode: "LOAD",
    args: [ 3 ]
  }, {
    opCode: "XOR",
    args: [ 1, 0 ]
  }, {
    opCode: "XOR",
    args: [ 2, 0 ]
  }, {
    opCode: "XOR",
    args: [ 3, 0 ]
  }
]
```
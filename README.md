# Fork Colours

A tiny and fast Node.js library to ANSI colors to terminal output.

>Started as a fork
> of [**@ai**](https://github.com/ai)'s
> [`nanocolors`](https://github.com/ai/nanocolors), which is a fork
> of [**@jorgebucaran**](https://github.com/jorgebucaran/)’s
> [`colorette`](https://github.com/jorgebucaran/colorette) with hacks
> from [**@lukeed**](https://github.com/lukeed/)’s
> [`kleur`](https://github.com/lukeed/kleur).

**Main features:**

* This library was inspired by many **unique** libraries
* It is **faster** than alternatives
* It is british friendly: Tiny **Colours** not **Colors**
* It is a **fork** of **fork**
* It is **one-liner** program
* Total files: **7**

**Besides:**
* It is **4 times faster** than `chalk` for simple use cases.
* **No dependencies.** It takes **5 times less space** in `node_modules`
  than `chalk`.
* **Auto-detects color support.** You can also toggle color mode manually.
* **Tree-shakable.** We use a dual [ESM]/[CJS] package.
* Supports Node.js ≥ 6 and universal Node.js/browser projects.

```js
import { green, bold } from 'forkcolours'

console.log(
  green(`Task ${bold('1')} was finished`)
)
```
## Inspired by

- [Nanocolors](https://github.com/ai/nanocolors) by [@ai](https://github.com/ai)
- [Colorette](https://github.com/jorgebucaran/colorette) by [@jorgebucaran](https://github.com/jorgebucaran)
- [Kleur](https://github.com/lukeed/kleur) by [@lukeed](https://github.com/lukeed)
- [Colors.js](https://github.com/Marak/colors.js) by [@Marak](https://github.com/Marak)
- [Chalk](https://github.com/chalk/chalk) by [@sindresorhus](https://github.com/sindresorhus)
- And many more...

## [Real-time Benchmarks](https://github.com/elaichenkov/forkcolours/actions/workflows/bench.yml)

[Simple](test/simple-benchmark.js)

```shell
Run node test/simple-benchmark.js
  chalk 27,865,695 ops/sec
  cli-color 320,071 ops/sec
  ansi-colors 1,454,343 ops/sec
  kleur 69,030,393 ops/sec
  kleur/colors 61,530,806 ops/sec
  felt-pen 21,725,908 ops/sec
  colorette 18,321,149 ops/sec
  nanocolors 7,978,665 ops/sec
  forkcolours 18,935,821 ops/sec 🚀
```

[Complex](test/complex-benchmark.js)

```shell
Run node test/complex-benchmark.js
  chalk 7,265,255 ops/sec
  cli-color 216,698 ops/sec
  ansi-colors 610,524 ops/sec
  kleur 11,316,157 ops/sec
  kleur/colors 11,019,217 ops/sec
  felt-pen 7,388,171 ops/sec
  colorette 1,487,709 ops/sec
  nanocolors 1,463,641 ops/sec
  forkcolours 1,537,279 ops/sec 🚀
```

[Loading](test/loading.cjs)

```shell
Run node test/loading.cjs
  chalk 8.838 ms
  cli-color 47.355 ms
  ansi-colors 4.199 ms
  kleur 5.217 ms
  kleur/colors 1.824 ms
  felt-pen 0.715 ms
  colorette 1.515 ms
  nanocolors 0.917 ms
  forkcolours 0.763 ms 🚀
```

[Size](test/size.js)

```shell
Run node test/size.js
  chalk 101 kB
  cli-color 1249 kB
  ansi-colors 25 kB
  kleur 21 kB
  felt-pen 10 kB
  colorette 16 kB
  nanocolors 16 kB
  forkcolours 16 kB 🚀
```

[Colorette](test/colorette-benchmark.js)

```shell
  Run node test/colorette-benchmark.js
  chalk × 6,570,253 ops/sec
  kleur × 10,115,512 ops/sec
  ansi-colors × 202,788 ops/sec
  colorette × 459,384 ops/sec
  nanocolors × 435,993 ops/sec
  forkcolours × 469,867 ops/sec 🚀
```
## Replacing `chalk`

1. Replace import and use named exports:

   ```diff
   - import chalk from 'chalk'
   + import { red, bold } from 'forkcolours'
   ```

2. Unprefix calls:

   ```diff
   - chalk.red(text)
   + red(text)
   ```

3. Replace chains to nested calls:

   ```diff
   - chalk.red.bold(text)
   + red(bold(text))
   ```
## API

### Individual Colors

Fork Colours exports functions:

| Colors    | Background Colors   | Modifiers         |
| --------- | ------------------- | ----------------- |
| `black`   | `bgBlack`           | dim               |
| `red`     | `bgRed`             | **bold**          |
| `green`   | `bgGreen`           | hidden            |
| `yellow`  | `bgYellow`          | _italic_          |
| `blue`    | `bgBlue`            | <u>underline</u>  |
| `magenta` | `bgMagenta`         | ~~strikethrough~~ |
| `cyan`    | `bgCyan`            | reset             |
| `white`   | `bgWhite`           |                   |
| `gray`    |                     |                   |

Functions are not chainable. You need to wrap it inside each other:

```js
import { black, bgYellow } from 'forkcolours'

console.log(bgYellow(black(' WARN ')))
```

Functions will use colors only if Fork Colours auto-detect that current
environment supports colors.

You can get support level in `isColorSupported`:

```js
import { isColorSupported } from 'forkcolours'

if (isColorSupported) {
  console.log('With colors')
}
```


### Conditional Support

You can manually switch colors on/off and override color support auto-detection:

```js
import { createColors } from 'forkcolours'

const { red } = createColors(options.enableColors)
```

On `undefined` argument, `createColors` will use value
from color support auto-detection.

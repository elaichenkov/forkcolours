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

* It is british friendly Tiny `Colours` not `Colors`
* It is a fork of fork
* It has a history of all commits
* It is one-liner program

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

## Benchmarks


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

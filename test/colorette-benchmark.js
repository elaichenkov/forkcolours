import bench from "benchmark"
import * as colorette from "colorette"
import ansiColors from "ansi-colors"
import chalk from "chalk"
import kleur from "kleur"
import * as nanocolors from "nanocolors"
import * as forkcolours from "forkcolours"

const runBenchmark = (test, modules) =>
  Object.keys(modules)
    .reduce(
      (bench, id) => bench.add(id, test.bind({}, modules[id])),
      new bench.Suite().on("cycle", ({ target: { name, hz } }) =>
        console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
      )
    )
    .run()

runBenchmark(
  (c) =>
    c.red(
      `${c.blue(
        `${c.bold(`${c.yellow("foo")}${c.underline("foo")}`)}${c.magenta(
          `${c.white("foo")}${c.cyan("foo")}`
        )}`
      )}`
    ),
  {
    chalk,
    kleur,
    nanocolors,
    colorette,
    forkcolours,
    "ansi-colors": ansiColors,
  }
)

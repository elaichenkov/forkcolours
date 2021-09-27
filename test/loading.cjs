#!/usr/bin/env node

const { performance } = require('perf_hooks')

let before
function showTime(name) {
  let after = performance.now()
  let time = (Math.round(1000 * (after - before)) / 1000).toString()
  time = time.replace(/\.\d$/, '$&00').replace(/\.\d\d$/, '$&0')
  let title = name.padEnd('kleur/colors  '.length)
  process.stdout.write(title + '\x1B[1m' + time.padStart(6) + '\x1B[22m ms\n')
}

before = performance.now()
let chalk = require('chalk')
showTime('chalk')

before = performance.now()
let cliColor = require('cli-color')
showTime('cli-color')

before = performance.now()
let ansi = require('ansi-colors')
showTime('ansi-colors')

before = performance.now()
let kleur = require('kleur')
showTime('kleur')

before = performance.now()
let kleurColors = require('kleur/colors')
showTime('kleur/colors')

before = performance.now()
let colorette = require('colorette')
showTime('colorette')

before = performance.now()
let pen = require('felt-pen')
showTime('felt-pen')

before = performance.now()
let nanocolors = require('nanocolors')
showTime('nanocolors')

before = performance.now()
let forkcolours = require('../index.cjs')
showTime('forkcolours')

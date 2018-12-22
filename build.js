'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Adithya NR /'),
  work: chalk.white('Full Stack Designer'),
  web: chalk.cyan('https://adithyabhat.com'),
  dribbble: chalk.cyan('https://dribbble.com/adithyanr'),
  twitter: chalk.cyan('https://twitter.com/Adithyabhat9'),
  github: chalk.cyan('https://github.com/AdithyaBhat17'),
  linkedin: chalk.cyan('https://linkedin.com/in/adithya-nr'),
  npx: chalk.white('npx adithyanr'),
  labelWork: chalk.white.bold('Work:'),
  labelWeb: chalk.white.bold('Web:'),
  labelDribbble: chalk.white.bold('Dribbble:'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const dribbbling = `${data.labelDribbble}  ${data.dribbble}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + webing + newline + dribbbling + newline + twittering + newline + githubing + newline + linkedining + newline + newline + carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))

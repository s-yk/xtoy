#!/usr/bin/env node
'use strict';

const cli = require('cac')();
const Converter = require('./src/index.js');

cli
    .command('conv <XML file>')
    .option('--file <filename>', 'Output file name;', {
      default: '',
    })
    .action((file, options) => {
      const converter = new Converter();
      converter.convert(file, options);
    });

cli.help();
cli.parse();

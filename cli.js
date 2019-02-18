#!/usr/bin/env node
'use strict';

const cli = require('cac')();
const Converter = require('./src/index.js');

cli
    .command('')
    .action(() => {
      cli.outputHelp();
    });

cli
    .command('conv <XML file>')
    .option('-f, --file <filename>', 'Output file name;', {
      default: '',
    })
    .option('-c, --case <hashkey case-type>',
        'Change YAML hash key Case type;', {
          default: 'no',
        })
    .action((file, options) => {
      const converter = new Converter();
      converter.convert(file, options);
    });

cli.help();
cli.parse();

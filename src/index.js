'use strict';

const xmlParser = require('fast-xml-parser');
const yaml = require('json2yaml');
const fs = require('fs');

const Converter = function() {};

Converter.prototype.convert = function(src, dest) {
  const xmlData = fs.readFileSync(src, 'utf-8');
  if (xmlParser.validate(xmlData, false) === true) {
    const xmlData = xmlParser.parse(xmlData);
    const yamlData = yaml.stringify(xmlData);
    fs.writeFileSync(dest, yamlData);
  } else {
    throw new Error('src is not xml-data');
  }
};

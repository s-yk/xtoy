'use strict';

const xmlParser = require('fast-xml-parser');
const yaml = require('json2yaml');
const fs = require('fs');

const Converter = function() {};

Converter.prototype.convert = function(src, option) {
  const xmlData = fs.readFileSync(src, 'utf-8');
  if (xmlParser.validate(xmlData, false) === true) {
    const parsedXml = xmlParser.parse(xmlData);
    const yamlData = yaml.stringify(parsedXml);
    if (option.file) {
      fs.writeFileSync(option.file, yamlData);
    } else {
      console.log(yamlData);
    }
  } else {
    throw new Error('src is not xml-data');
  }
};

module.exports = Converter;

'use strict';

const xmlParser = require('fast-xml-parser');
const yaml = require('json2yaml');
const changeCase = require('change-case');
const fs = require('fs');

const Converter = function() {};

Converter.prototype.convert = function(src, option) {
  const xmlData = fs.readFileSync(src, 'utf-8');

  if (xmlParser.validate(xmlData, false) === true) {
    const parsedXml = xmlParser.parse(xmlData);
    const yamlData = yaml.stringify(parsedXml);

    let outputData;
    if (option['case'] !== 'no') {
      // hash key の変換
      const re = /(.*?)([^ ]+?)(:.*)/;
      const yamlSplitData = yamlData.split('\n');
      const changedCaseData = [];
      yamlSplitData.forEach((element) => {
        const changedData = element.replace(re,
            (match, p1, p2, p3, offset, string) => {
              return p1 + changeCase[option['case'] + 'Case'](p2) + p3;
            });
        changedCaseData.push(changedData);
      });
      outputData = changedCaseData.join('\n');
    } else {
      outputData = yamlData;
    }

    if (option.file) {
      fs.writeFileSync(option.file, outputData);
    } else {
      console.log(outputData);
    }
  } else {
    throw new Error('taget file is not xml-file');
  }
};

module.exports = Converter;

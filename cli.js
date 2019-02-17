#!/usr/bin/env node
'use strict';

const Hello = require('./src/index.js');
const helloMod = new Hello();

helloMod.sayHello();

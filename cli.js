#!/usr/bin/env node
'use strict';

const Hello = require('./src/index');
const helloMod = new Hello();

helloMod.sayHello();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileReader_1 = require("../FileReader");
const fileReader = new FileReader_1.FileReader('../../../src/Day 1/input.txt');
const input = fileReader.readFile().splitBy(new RegExp(/\r?\n/)).asNestedNumberArray();
console.log(input.length);
let totals = input.map(elf => elf.reduce((p, c) => { return p + c; }));
console.log(totals.sort((a, b) => a - b).reverse());
//# sourceMappingURL=day1.js.map
import { FileReader } from "../FileReader"

const fileReader = new FileReader('../../../src/Day 1/input.txt');
const  input = fileReader.readFile().splitBy(new RegExp(/\r?\n/)).asNestedNumberArray();

console.log(
    input.length
) 

let totals = input.map(elf => elf.reduce((p, c) => {return p + c}))

console.log(totals.sort((a,b) => a - b).reverse())
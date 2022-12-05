import * as fs from 'fs';
export class FileReader {
    private filePath: string;
    private file: string;
    private split: string[] = [];

    constructor(filePath: string){
        this.filePath = filePath;
        this.file = '';
    }

    public readFile() {
       this. file = fs.readFileSync(this.filePath, 'utf8');
       return this;
    }

    public splitBy(splitByCharacter: string | RegExp){
        this.split = this.file.split(splitByCharacter);
        return this;
    }

    public asNestedNumberArray(): number[][] {
        let nested: number[][] = [];
        let subarray: number[] = [];

        this.split.forEach(item => {
            if (!item) {
                nested.push(subarray);
                subarray = [];
                return;
            }
            subarray.push(+item);
        })
        return nested;
    }
}
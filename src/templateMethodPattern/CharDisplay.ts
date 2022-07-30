import { AbstractDisplay } from "./AbstractDisplay"

export class CharDisplay extends AbstractDisplay {

    private char: string;

    constructor(char: string) {
        super();
        this.char = char
    }


    open() {
        return "<<"
    }

    print() {
        return this.char
    }

    close() {
        return ">>"
    }
} 
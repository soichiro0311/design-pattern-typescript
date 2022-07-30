import { AbstractDisplay } from "./AbstractDisplay"

export class StringDisplay extends AbstractDisplay {

    private string: string;

    constructor(string: string) {
        super();
        this.string = string
    }


    open() {
        return "***"
    }

    print() {
        return this.string + '.'
    }

    close() {
        return "***"
    }
} 
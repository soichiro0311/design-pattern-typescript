export abstract class AbstractDisplay {
    constructor() {

    }
    abstract open(this: AbstractDisplay): string;
    abstract print(this: AbstractDisplay): string;
    abstract close(this: AbstractDisplay): string;

    display(): string {
        let result = this.open();

        for (let i = 0; i < 5; i++) {
            result = result + this.print()
        }

        result = result + this.close()

        return result;
    }
} 
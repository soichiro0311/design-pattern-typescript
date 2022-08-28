import { Observer } from './Observer';
import NumberGenerator from './NumberGenerator';
export default class IncrementNumberGenerator extends NumberGenerator {

    value: number
    executeCount: number

    constructor(value: number, executeCount: number) {
        super();
        this.value = value
        this.executeCount = executeCount
    }

    getNumber(): number {
        return this.value
    }

    execute(): void {
        for (let i: number = 0; i < this.executeCount; i++) {
            this.value = this.value + 1;
            this.notifyObservers();
        }
    }
}

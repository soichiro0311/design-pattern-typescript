import { Observer } from "./Observer";
import NumberGenerator from "./NumberGenerator";

export class DigitObserver implements Observer {
    update(generator: NumberGenerator): void {
        console.log(String(generator.getNumber()));
    }
}

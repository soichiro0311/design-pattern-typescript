import { Observer } from "./Observer";
import NumberGenerator from "./NumberGenerator";

export class GraphObserver implements Observer {
    update(generator: NumberGenerator): void {
        let result: string = ''
        for (let i: number = 0; i < generator.getNumber(); i++) {
            result = result + '*'
        }

        console.log(result);
    }
}

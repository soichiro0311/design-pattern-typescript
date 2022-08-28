import { Observer } from "../../src/observerPattern/Observer";
import { DigitObserver } from "../../src/observerPattern/DigitObserver";
import { GraphObserver } from "../../src/observerPattern/GraphObserver";
import NumberGenerator from "../../src/observerPattern/NumberGenerator";
import IncrementNumberGenerator from "../../src/observerPattern/IncrementNumberGenerator";

describe('DigitObserver', () => {
    it('インクリメント数値生成器が開始の値を10,インクリメント回数を3とした時,11,12,13の順にObserverが値を出力できること', () => {
        console.log = jest.fn();

        const digitObserver: Observer = new DigitObserver();
        const generator: NumberGenerator = new IncrementNumberGenerator(10, 3);

        generator.addObserver(digitObserver)
        generator.execute()

        expect(console.log.mock.calls[0][0]).toBe('11');
        expect(console.log.mock.calls[1][0]).toBe('12');
        expect(console.log.mock.calls[2][0]).toBe('13');
    })
})

describe('GraphObserver', () => {
    it('インクリメント数値生成器が開始の値を10,インクリメント回数を3とした時,*が11個,12個,13個の順にObserverが値を出力できること', () => {
        console.log = jest.fn();

        const graphObserver: Observer = new GraphObserver();
        const generator: NumberGenerator = new IncrementNumberGenerator(10, 3);

        generator.addObserver(graphObserver)
        generator.execute()

        expect(console.log.mock.calls[0][0]).toBe('***********');
        expect(console.log.mock.calls[1][0]).toBe('************');
        expect(console.log.mock.calls[2][0]).toBe('*************');
    })
})

import { CharDisplay } from "../../src/templateMethodPattern/CharDisplay";

describe('CharDisplay', () => {
    it('Hが五回出力され、装飾されていること', () => {
        const charDisplay: CharDisplay = new CharDisplay("H");
        expect(charDisplay.display()).toBe("<<HHHHH>>")
    })

    it('Yが五回出力され、装飾されていること', () => {
        const charDisplay: CharDisplay = new CharDisplay("Y");
        expect(charDisplay.display()).toBe("<<YYYYY>>")
    })
})
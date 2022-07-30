import { CharDisplay } from "../../src/templateMethodPattern/CharDisplay";
import { StringDisplay } from "../../src/templateMethodPattern/StringDisplay";

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

describe('StringDisplay', () => {
    it('Helloが五回出力され、装飾されていること', () => {
        const stringDisplay: StringDisplay = new StringDisplay("Hello");
        expect(stringDisplay.display()).toBe("***Hello.Hello.Hello.Hello.Hello.***")
    })
})
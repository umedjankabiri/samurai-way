import {addition} from "common/components/__tests__/addition.ts";

test("result should be correct", ()=> {
    const a: number = 10;
    const b: number = 20;
    const result = addition(a, b);

    expect(result).toBe(30);
})
import { beTrue } from "../src/tester";

test ("should return true", () => {
    let result = beTrue();
    expect(result).toBe(true);
});
const { TestScheduler } = require("jest");
/**
 * @jest-environment jsdom
 */
const addition = require("../calc");

describe("Calculator test",() => {
    describe("Addition function",()=>{
        test("should return 42",()=>{
            expect(addition(20,22)).toBe(42);
        })
        test("should return 73 for 42 + 31 ",()=>{
            expect(addition(42,31)).toBe(73);
        })
    });
    describe("Subtraction function",()=>{
        
    });
    describe("Multiply function",()=>{
        
    });
    describe("Division function",()=>{
        
    });

});
const highestNumber = require("./functions.js").highestNumber;

test("highestNumber() should return the highest number in the input array", () => {
    // ARRANGE
        const arr = [3, 6, 9, 17, 4, 6, 25];
    // ACT
        const result = highestNumber(arr);
    // ASSERT
        expect(result).toBe(25);
})
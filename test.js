const assert = require("assert");
const { convertToCelsius, filterExtremeTemps } = require("./main");

try {
    // ✅ Valid
    assert.deepStrictEqual(convertToCelsius([32, 212]), [0, 100]);
    assert.deepStrictEqual(filterExtremeTemps([10, 20, 30], 15, 25), [20]);

    // ❌ Invalid
    // assert.throws(() => convertToCelsius("notArray"), /array/);
    assert.deepStrictEqual(filterExtremeTemps([10, 20, 30], 50, 60), []);

    // 💥 Intentional break
    // assert.deepStrictEqual(convertToCelsius([32]), [100]);

} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
}

console.log("All tests passed ✅");
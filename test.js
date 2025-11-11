const assert = require("assert");
const { convertToCelsius, filterExtremeTemps } = require("./main");

try {
    // ✅ Valid tests
    // assert.deepStrictEqual(convertToCelsius([32, 212]), [0, 100]);
    // assert.deepStrictEqual(filterExtremeTemps([10, 20, 30, 40], 15, 35), [20, 30]);

    // ❌ Invalid tests
    assert.throws(() => convertToCelsius([32, "hot", 212]), /numbers/);       // Non-numeric input
    // assert.throws(() => filterExtremeTemps([10, 20, 30], 50, 10), /greater/); // Invalid min-max relationship

    // 💥 Intentional break test
    // assert.deepStrictEqual(convertToCelsius([32]), [100]); // Wrong assertion on purpose

} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
}

console.log("All tests passed ✅");
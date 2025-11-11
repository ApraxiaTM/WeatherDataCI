function convertToCelsius(fahrenheitArray) {
    if (!Array.isArray(fahrenheitArray)) throw new Error("Input must be array");
    if (!fahrenheitArray.every(f => typeof f === "number")) throw new Error("All elements must be numbers");
    return fahrenheitArray.map(f => ((f - 32) * 5) / 9);
}

function filterExtremeTemps(temps, min, max) {
    if (!Array.isArray(temps)) throw new Error("Input must be array");
    if (typeof min !== "number" || typeof max !== "number") throw new Error("Min/Max must be numeric");
    if (min > max) throw new Error("Min cannot be greater than Max");
    if (!temps.every(t => typeof t === "number")) throw new Error("All temps must be numeric");
    return temps.filter(t => t >= min && t <= max);
}

module.exports = { convertToCelsius, filterExtremeTemps };
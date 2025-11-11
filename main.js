function convertToCelsius(fahrenheitArray){
    if (!Array.isArray(fahrenheitArray)) throw new Error("Input must be array");
    return fahrenheitArray.map(f => ((f - 32) * 5) / 9);
}

function filterExtremeTemps(temps, min, max){
    if (!Array.isArray(temps)) throw new Error("Input must be array");
    return temps.filter(t => t >= min && t <= max);
}

module.exports = { convertToCelsius, filterExtremeTemps };
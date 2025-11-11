function convertToCelsius(fahrenheitArray) {
    if (!Array.isArray(fahrenheitArray)) {
        throw new Error('Input must be an array');
    }
    if (!fahrenheitArray.every(temp => typeof temp === 'number')) {
        throw new Error('All temperatures must be numbers');
    }
    
    return fahrenheitArray.map(f => Math.round(((f - 32) * 5 / 9) * 10) / 10);
}

function filterExtremeTemps(temps, min, max) {
    if (!Array.isArray(temps)) {
        throw new Error('Temperatures must be an array');
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Min and max must be numbers');
    }
    if (min > max) {
        throw new Error('Min cannot be greater than max');
    }
    
    return temps.filter(temp => temp >= min && temp <= max);
}

module.exports = { convertToCelsius, filterExtremeTemps };
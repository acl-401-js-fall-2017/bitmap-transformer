function redscale (colorVal) {
    const colorValAvg = (colorVal.r + colorVal.g + colorVal.b)/3;
    colorVal.r = 2 * colorValAvg;
    colorVal.g = colorValAvg / 2;
    colorVal.b = colorValAvg / 2;
    return colorVal;
}

module.exports = redscale;
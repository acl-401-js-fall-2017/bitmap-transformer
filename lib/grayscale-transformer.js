function grayscale (colorVal) {
    const colorValAvg = (colorVal.r + colorVal.g + colorVal.b)/3;
    colorVal.r = colorValAvg;
    colorVal.g = colorValAvg;
    colorVal.b = colorValAvg;
    return colorVal;
}

module.exports = grayscale;
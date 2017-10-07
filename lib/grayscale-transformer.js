
function grayscale(color) {
    const colorAvg = (color.r + color.g + color.b)/3;
    color.r = colorAvg;
    color.b = colorAvg;
    color.g = colorAvg;
    return color;
}

module.exports = grayscale;
function invert(colorVal) {
    colorVal.r = 255 - colorVal.r;
    colorVal.g = 255 - colorVal.g;
    colorVal.b = 255 - colorVal.b;

    return colorVal;
}

module.exports = invert;
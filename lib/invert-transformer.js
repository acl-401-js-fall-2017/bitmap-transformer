function invert(color) {
    color.r = 255-color.r,
    color.g = 255-color.g,
    color.b = 255-color.b;

    return color;
}

module.exports = invert;
function invert(rgbObj) {
    rgbObj.r = 255 - rgbObj.r;
    rgbObj.g = 255 - rgbObj.g;
    rgbObj.b = 255 - rgbObj.b;

    return rgbObj;
}

module.exports = invert;
function grayscale(rgbObj) {
    let avg = (rgbObj.r + rgbObj.g + rgbObj.b)/3;
    rgbObj.r = avg;
    rgbObj.g = avg;
    rgbObj.b = avg;

    return rgbObj;
}

module.exports = grayscale;
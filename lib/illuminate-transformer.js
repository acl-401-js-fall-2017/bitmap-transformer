module.exports = function(pix) {

    // greatest possible color value
    const max = 255;

    // to hold the highest color value in the given pixel (rgb)
    let greatestVal = 0,

    // to be mulitplied by each color value
        boostRatio = 1;

    // extract the highest color value from the pixel
    for(let color in pix) {
        if(pix[color] > greatestVal) greatestVal = pix[color];
    }
    
    // establish the multiplier by which to modify each color
    boostRatio = max / greatestVal;

    for(let color in pix) {
        pix[color] = Math.floor(pix[color] * boostRatio);
    }

    return pix;
};
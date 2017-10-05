function grayscale(rgbObj){
    let avg = (rgbObj.r + rgbObj.b + rgbObj.g) / 3;
    rgbObj.r = avg;
    rgbObj.b = avg;
    rgbObj.g = avg;
    
    return rgbObj;
}

module.exports = grayscale;
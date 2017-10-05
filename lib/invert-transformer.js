function invert(rgbObj){
    rgbObj.r = 255 - rgbObj.r;
    rgbObj.b = 255 - rgbObj.b;
    rgbObj.g = 255 - rgbObj.g;
    
    return rgbObj;
}

module.exports = invert;
module.exports = function invert(pixel){
    
    let  transformed = {
        r: (255 -pixel.r),
        g: (255 -pixel.g),
        b: (255 -pixel.b)
    };

    

    return transformed;
};
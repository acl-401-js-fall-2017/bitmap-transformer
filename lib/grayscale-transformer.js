module.exports = function grayscale(pixle){

    let average = (pixle.r+pixle.g+pixle.b)/3;

    let transformed = {
        r: average,
        g: average,
        b: average
        
    };

    
    return transformed;
};
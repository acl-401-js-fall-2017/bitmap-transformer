module.exports = function(pix) {
    if(
        pix.r === 0 &&
        pix.g === 0 &&
        pix.b === 0
    ) return {
        r: 255,
        g: 255,
        b: 255
    };
    return pix;
};
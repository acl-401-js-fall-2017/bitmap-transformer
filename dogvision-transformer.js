module.exports = function(pix) {
    if(pix.r > pix.g) {
        pix.r = pix.g;
    }
    return pix;
};
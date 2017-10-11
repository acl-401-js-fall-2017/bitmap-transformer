module.exports = function(pix) {
    if(pix.r !== pix.g) {
        pix.r = pix.g = (pix.r + pix.g) / 2;
    }
    return pix;
};
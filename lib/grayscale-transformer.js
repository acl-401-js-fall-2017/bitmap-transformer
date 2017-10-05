module.exports = function(pix) {
    pix.r = pix.g = pix.b = (pix.r + pix.g + pix.b) / 3;
    return pix;
};
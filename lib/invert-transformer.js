module.exports = function(pix) {
    pix.r = 255 - pix.r;
    pix.g = 255 - pix.g;
    pix.b = 255 - pix.b;

    return pix;
};
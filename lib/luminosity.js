module.exports = function  luminosity (obj) {
    let lum = Math.floor((0.21 * obj.r) + (0.72 * obj.g) + (0.07 * obj.b));

    obj.r = lum;
    obj.g = lum;
    obj.b = lum;

    return obj
};
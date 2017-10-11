
function grayscale(color) {
    const r = color.r;
    const g = color.g;
    const b = color.b;

    color.r =  (r + g + b) / 3;
    color.g = (r + g + b) / 3;
    color.b = (r + g + b) / 3;

    return color;
}
module.exports = grayscale;
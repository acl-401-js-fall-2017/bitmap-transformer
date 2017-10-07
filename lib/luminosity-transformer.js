
function luminosity(color) {
    const avgColor = (color.r + color.g + color.b)/3;
    color.r = .21 * avgColor;
    color.g = .72 * avgColor;
    color.b = Math.round(.07 * avgColor * 100)/100; //kept getting a number to ten decimal places without Math.round on the color b only
    return color;
}

module.exports = luminosity;
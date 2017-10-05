const BitmapHeader = require('../lib/bitmap-header');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }
    // eslint-disable-next-line
    transform(fn) {

        this.header.BitmapHeader(this.buffer);
        // eslint-disable-next-line
        const pixels = this.buffer.slice(this.header.pixelOffset);

    
    }
}
module.exports = BitmapTransform;
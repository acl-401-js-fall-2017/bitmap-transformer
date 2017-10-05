const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }
    // eslint-disable-next-line
    transform(fn) {

    }
        
}

module.exports = BitmapTransform;
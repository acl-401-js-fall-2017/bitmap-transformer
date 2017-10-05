const CONST = require('./bitmap-constants.js');

class BitmapHeader {
    constructor(buffer) {
        
        this.pixelOffset = CONST.PIXEL_OFFSET;
        this.bitsPerPixel = CONST.BITS_PER_PIXEL_OFFSET;
        this.fileSize = CONST.FILE_SIZE_OFFSET;
    }
}


module.exports = BitmapHeader;
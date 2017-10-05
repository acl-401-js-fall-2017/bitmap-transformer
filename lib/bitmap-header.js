const CONST = require('./bitmap-constants.js');

class BitmapHeader {
    constructor(buffer) {
        
        this.pixelOffset = buffer.readInt32LE(CONST.PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readInt16LE(CONST.BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readInt32LE(CONST.FILE_SIZE_OFFSET);
    }
}


module.exports = BitmapHeader;
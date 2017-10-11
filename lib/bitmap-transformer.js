const BitmapHeader = require('../lib/bitmap-header');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }
    
    transform(fn) {

        let loopedIndex = this.header.pixelOffset;
        let loopedInterval = this.header.bitsPerPixel / 8;
        let pixelObject = null;
        for (loopedIndex; loopedIndex < this.header.fileSize; loopedIndex += loopedInterval){ 
            pixelObject = {
                r : this.buffer.readUInt8(loopedIndex),
                g : this.buffer.readUInt8(loopedIndex + 1),
                b : this.buffer.readUInt8(loopedIndex + 2)
            };
            pixelObject = fn(pixelObject);
            
            this.buffer.writeUInt8(pixelObject.r, loopedIndex);
            this.buffer.writeUInt8(pixelObject.g, loopedIndex + 1);
            this.buffer.writeUInt8(pixelObject.b, loopedIndex + 2);
        }
    
    }
}
module.exports = BitmapTransform;
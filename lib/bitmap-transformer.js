const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        let loopIndex = this.header.pixelOffset;
        let loopInterval = this.header.bitsPerPixel / 8;
        let pixelObject = null;
        for (loopIndex; loopIndex < this.header.fileSize; loopIndex += loopInterval){ 
            pixelObject = {
                r : this.buffer.readUInt8(loopIndex),
                g : this.buffer.readUInt8(loopIndex + 1),
                b : this.buffer.readUInt8(loopIndex + 2)
            };
            pixelObject = fn(pixelObject);
            
            this.buffer.writeUInt8(pixelObject.r, loopIndex);
            this.buffer.writeUInt8(pixelObject.g, loopIndex + 1);
            this.buffer.writeUInt8(pixelObject.b, loopIndex + 2);
        }
    }
}


module.exports = BitmapTransformer;
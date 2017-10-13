const BitmapHeader = require('./bitmap-header');

const buffer = require('buffer');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(pixelTransform) {
        // find the right place in the buffer to loop to 
        for(let i = this.header.pixelOffset; i < this.header.fileSize; i+= this.header.bytesPerPixel) {
            let pixel = {
                // read an unsigned 8-bit integer from buffer at specified offset
                r: this.buffer.readUInt8(i),
                g: this.buffer.readUInt8(i + 1),
                b: this.buffer.readUInt8(i + 2)
            };
            pixel = pixelTransform(pixel);    
        
            // write pixel value back to buffer at specified offset
            this.buffer.writeUInt8(i);
            this.buffer.writeUInt8(i + 1);
            this.buffer.writeUInt8(i + 2);
        }
        return this;

    }
        
}

module.exports = BitmapTransform;
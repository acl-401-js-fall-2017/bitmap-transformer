const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        // this is a guide to what needs to happen
        // not a recipe

        // find the right place in the buffer that you to loop 
        // and start:
        // 1. reading pixel
        // 2. passing to fn
        // 3. write pixel back to buffer

        // you have access to:
        // this.buffer;
        // this.header.bitsPerPixel;
        const pixelOffset = this.header.pixelOffset;
        const fileSize = this.header.fileSize;
        const bytesPerPixel = this.header.bitsPerPixel/8;

        for (let i = pixelOffset; i < (fileSize); 
            i = i + bytesPerPixel) {
            let r = this.buffer.readUInt8(i);
            let g = this.buffer.readUInt8(i + 1);
            let b = this.buffer.readUInt8(i + 2);
            let pixelObj = {r, g, b};
            let newPixelObj = fn(pixelObj);
            this.buffer.writeUInt8(newPixelObj.r, i);
            this.buffer.writeUInt8(newPixelObj.g, i + 1);
            this.buffer.writeUInt8(newPixelObj.b, i + 2);


        }
        return this.buffer;
        // read the pixel;
        // invert();
        // push the pixel back onto the buffer - write the pixel;
        
        // there is a buffer.slice

        // control your javascript loop 
        // (you can "step" by something other than 1)
    }
}

module.exports = BitmapTransform;
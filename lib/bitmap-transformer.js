const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
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
        this.buffer;
        this.header.bitsPerPixel;

        for (var i = this.header.pixelOffset; i < this.header.fileSize; i += 3) {
            let RGBobj = {
                b: 255 - this.buffer.readUInt8(i),
                g: 255 - this.buffer.readUInt8(i + 1),
                r: 255 - this.buffer.readUInt8(i + 2),
            };

            RGBobj = fn(RGBobj);

            this.buffer.writeUInt8(RGBobj.b, i);
            this.buffer.writeUInt8(RGBobj.g, i + 1);
            this.buffer.writeUInt8(RGBobj.r, i + 2);

        }
        return this;

        // there is a buffer.slice
        // control your javascript loop 
        // (you can "step" by something other than 1)
    }
}

module.exports = BitmapTransformer;
const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;
    }

    transform(pixTransformer) {
        for(let i = this.header.pixelOffset; i < this.header.fileSize; i += this.header.bytesPerPixel) {
            let pixel = {
                b: this.buffer.readUInt8(i),
                r: this.buffer.readUInt8(i + 1),
                g: this.buffer.readUInt8(i + 2)
            };
            pixel = pixTransformer(pixel);

            this.buffer.writeUInt8(pixel.b, i);
            this.buffer.writeUInt8(pixel.r, i + 1);
            this.buffer.writeUInt8(pixel.g, i + 2);
        }
    }
}

module.exports = BitmapTransformer;
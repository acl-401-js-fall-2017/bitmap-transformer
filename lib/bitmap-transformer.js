const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        for (let i = this.header.pixelOffset; i < this.header.fileSize; i += 3) {
            let colorVal = {
                b: this.buffer.readUInt8(i),
                g: this.buffer.readUInt8(i + 1),
                r: this.buffer.readUInt8(i + 2)
            };

            colorVal = fn(colorVal);

            this.buffer.writeUInt8(colorVal.b, i);
            this.buffer.writeUInt8(colorVal.g, i + 1);
            this.buffer.writeUInt8(colorVal.r, i + 2);
        }
        return this;
    }
}
module.exports = BitmapTransformer;
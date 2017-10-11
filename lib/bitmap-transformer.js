const BitmapHeader = require('./bitmap-header');


class BitmapTransformer {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        for( let i= this.header.pixelOffset; 
            i < this.header.fileSize; 
            i += this.header.bitsPerPixel/8){

            let mutatedPixel = fn({
                b: this.buffer[i],
                g: this.buffer[i + 1],
                r: this.buffer[i + 2]
            });

            this.buffer[i] =mutatedPixel.b;
            this.buffer[i+1] = mutatedPixel.g;
            this.buffer[i+2] = mutatedPixel.r;

        }
    }
}

module.exports = BitmapTransformer;
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
        // // this is a guide to what needs to happen
        // // not a recipe b g r 

        // // find the right place in the buffer that you want the loop 
        // // to start:
        // // 1. reading pixel
        // // 2. passing to fn
        // // 3. write pixel back to buffer

        // // you have access to:
        // this.buffer;
        // this.header.bitsPerPixel;

        // // there is a buffer.slice

        // // control your javascript loop 
        // // (you can "step" by something other than 1)
    }
}

module.exports = BitmapTransformer;
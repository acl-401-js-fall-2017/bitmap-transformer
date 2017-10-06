const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const dogvision = require('../lib/dogvision-transformer');
const whiteBackground = require('../lib/black2white-transformer.js');
const illuminate = require('../lib/illuminate-transformer.js');


function createModBMP(optionName = 'newTransform', option) {
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
        const bitmap = new BitmapTransformer(data);
        bitmap.transform(option);
        fs.writeFile(`./output_bitmaps/${optionName}.bmp`, bitmap.buffer, err => {
            if(err) console.error(err);
            else console.log(`Write successful: ./output_bitmaps/${optionName}.bmp`);
        });
    }); 
}

createModBMP('invert', invert);
createModBMP('grayscale', grayscale);
createModBMP('dogvision', dogvision);
createModBMP('whiteBackground', whiteBackground);
createModBMP('illuminated', illuminate);


function createMultModBMP(fileName = 'newTransform.bmp', ...args) {
    if(args.length === 0) console.error(new Error('expected transform options'));
    else {
        fs.readFile('./test/test-bitmap.bmp', (err, data) => {
            const bitmap = new BitmapTransformer(data);

            bitmap.transform(args[0]);
            for(let i = 1; i < args.length; i++) bitmap.transform(args[i]);

            fs.writeFile(`./output_bitmaps/${fileName}.bmp`, bitmap.buffer, err => {
                if(err) console.error(err);
                else console.log(`Write successful: ./output_bitmaps/${fileName}.bmp`);
            });
        }); 
    }
}

createMultModBMP('whiteBackground+invert', whiteBackground, invert);
createMultModBMP('dogvision+invert', dogvision, invert);
createMultModBMP('invert+dogvision', invert, dogvision);
createMultModBMP('all-current-transforms', whiteBackground, dogvision, grayscale, invert);





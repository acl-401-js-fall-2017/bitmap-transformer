const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const dogvision = require('../lib/dogvision-transformer');


function saveAsBMP(option, optionName = 'newTransform') {
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
        const bitmap = new BitmapTransformer(data);
        bitmap.transform(option);
        fs.writeFile(`./${optionName}.bmp`, bitmap.buffer, err => {
            if(err) console.error(err);
            else console.log(`Write successful: ./${optionName}.bmp`);
        });
    }); 
}

saveAsBMP(invert, 'invert');
saveAsBMP(grayscale, 'grayscale');
saveAsBMP(dogvision, 'dogvision');
const assert = require('assert');
const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const removeRed = require('../lib/removeRed-transformer');

describe('transformers', () => {

    it('invert', () => {
        // DONE HINT: invert subtracts each value from 255
        const transformed = invert({
            r: 34,
            g: 100,
            b: 205
        });

        assert.deepEqual(transformed, {
            r: 221,
            g: 155,
            b: 50
        });
    });

    it('grayscale', () => {
        // DONE HINT: grayscale assigns the average of all three colors
        // as the new value for each color
        const transformed = grayscale({
            r: 34,
            g: 100,
            b: 205
        });

        assert.deepEqual(transformed, {
            r: 113,
            g: 113,
            b: 113
        });
    });

    // DONE TODO: add a third transformer
    it('remove red', () => {});
    const transformed = removeRed({
        r: 44,
        g: 100,
        b: 69
    });

    assert.deepEqual(transformed, {
        r: 0,
        g: 100,
        b: 69
    });

});
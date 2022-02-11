const fs = require('fs')
// Load data

const arraylogger = (arr, n = 2, show_n = false) => {
    if (show_n == true)
        console.log(`Length of array: ${arr.length}\nFirst ${n}: ${arr.slice(1,3)}`);
    else
        console.log(`Length of array: ${arr.length}`);
}

const loadmnist = (main_dir, limit_data) => {
    const dataFileBuffer = fs.readFileSync(main_dir + '/train-images-idx3-ubyte')
    const labelFileBuffer = fs.readFileSync(main_dir + '/train-labels-idx1-ubyte')

    let pixelValues = []
    let labels = []

    for (var image = 0; image < limit_data; image++) {
        var pixels = []

        for (var x = 0; x <= 27; x++) {
            for (var y = 0; y <= 27; y++) {
                pixels.push(dataFileBuffer[image * 28 * 28 + (x + y * 28) + 15])
            }
        }

        labels.push(JSON.stringify(labelFileBuffer[image + 8]))
        pixelValues.push(pixels)
    }
    arraylogger(pixels, 2)
    return [pixelValues, labels]
}

module.exports = {
    arraylogger,
    loadmnist
};
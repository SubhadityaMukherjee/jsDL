// Imports
const data = require("./modules/data.js");
const preprocess = require("./modules/preprocess.js");
const activation = require("./modules/activation.js");

// Load the data
const main_dir = "/media/hdd/Datasets/MNIST/raw";
const limit_data = 1000;

let [train_x,train_y] = data.loadmnist(main_dir, limit_data);

// Preprocessing
train_x= preprocess.normalize(train_x);

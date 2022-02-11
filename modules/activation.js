const { sum } = require('./math')
function softmax(arr, der = false) {
  //e^x / sum(e^x)
  if (der == false) {
    const maxLogit = Math.max(...arr);
    const scores = arr.map(l => Math.exp(l - maxLogit));
    const denom = sum(scores);
    return scores.map(s => s / denom);
  } else {
    console.log("Does not backprop");
  }
}
function sigmoid(arr, der = false) {
  if (der == false) {
    return arr.map(l => 1.0/(1.0 + Math.exp(-l)));
  } else {
    return arr.map(l => l*(1.0 -l));

  }
}

module.exports = {
  softmax,sigmoid
};

// console.log(activation.sigmoid([ 0.9780449271202087,
//   0.01590355671942234,
//   0.0019390975357964635,
//   0.0015482910675927997,
//   0.0012942816829308867,
//   0.0006004497990943491,
//   0.0004827099328394979,
//   0.0001868270628619939 ]
// ))
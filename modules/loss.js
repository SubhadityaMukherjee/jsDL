const { mean, subtract, sqrt, zeros } = require('./math')
const MSE = (output, y) =>{
    return mean(subtract(output,y).map(n => n *n));
}
const RMSE = (output, y) =>{
    return sqrt( mean(subtract(output,y).map(n => n *n)));
}


// const y = [
//   0.9780449271202087, 0.01590355671942234, 0.0019390975357964635,
//   0.0015482910675927997, 0.0012942816829308867, 0.0006004497990943491,
//   0.0004827099328394979, 0.0001868270628619939,
// ];
// const yhat = [
//   0.9780449271202087, 0.01590355671942234, 0.0019390975357964635,
//   0.1, 0.0012942816829308867, 0.0006004497990943491,
//   0.1, 0.0001868270628619939,
// ];

// console.log(MSE(yhat, y));


module.exports = {
    MSE, RMSE
}

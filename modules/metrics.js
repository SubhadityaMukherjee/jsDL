const { mean, subtract, sqrt, zeros,random } = require('./math')

function accuracy(orig, pred){
    correct = 0;
    orig.forEach((l, index) => {
        if(l == pred[index]){
            correct += 1
        }
    });
    return correct/orig.length;
}

t1 = [1, 1, 1, 1,1];
t2 = [1, 1, 2, 1,1];
console.log(accuracy(t1, t2))
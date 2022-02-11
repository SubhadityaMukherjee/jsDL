const { random } = require("./math");

let dict_inits = [{ random: randominit }];

function randominit(len) {
  return new Array(len).fill(random());
}

function init(type = "random", n_inputs, n_hidden, n_outputs) {
  // Any initialization function can be passed in
  let initf = dict_inits[0][type];
  let network = [];
  network.push(
    new Array(n_hidden).fill({
      weights: initf(n_inputs + 1),
    })
  );
  network.push(
    new Array(n_outputs).fill({
      weights: initf(n_hidden + 1),
    })
  );
  return network;
}

module.exports = {
    randominit, init
}

// let net = init("random", 2, 1, 2);
// for (i in net) {
//   console.log(net[i]);
// }

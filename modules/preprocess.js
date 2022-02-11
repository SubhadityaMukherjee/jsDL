const normalize = (arr) => {
    return arr.map( (v,i) => v.map( x=> x /255.0 ) );

};

module.exports = {
  normalize,
};

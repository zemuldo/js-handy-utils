

/*
  @Combinations generator:
  @params: arrays of option sets. eg. ['dual', 'electricity'], ['economy-meter', 'smart-meter']
  @result: array of combinations.
*/
const cartesian = function*(head, ...tail) {
  const remainder = tail.length ? cartesian(...tail) : [
    [],
  ];
  for (const r of remainder) for (const h of head) yield [h, ...r];
};

module.exports = cartesian;

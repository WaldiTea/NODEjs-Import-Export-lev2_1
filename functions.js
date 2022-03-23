const { data } = require("./data");

mostCivil = () => {
  return data.filter((civil) => civil.population > 100000);
}

lessCivil = () => {
  return data.filter((civil) => civil.population < 100000);
}

module.exports = { mostCivil, lessCivil }
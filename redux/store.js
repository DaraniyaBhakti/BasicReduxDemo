const { legacy_createStore } = require("redux");
const { default: counterReducer } = require("./Counter/counterReducer");

const store = legacy_createStore(counterReducer)
export default store;
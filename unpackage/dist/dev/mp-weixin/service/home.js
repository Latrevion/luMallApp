"use strict";
const service_index = require("./index.js");
let url = "/home/multidata";
const getHomeMutiData = () => {
  return service_index.LukeRequest.get(url, {});
};
exports.getHomeMutiData = getHomeMutiData;

"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 6e4;
const BASE_URL = "http://123.207.32.32:7888/api/hy66";
class LukeRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method,
        data,
        timeout: TIME_OUT,
        success: (res) => {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
  get(url, method, data) {
    return this.request(url, "GET", data);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
const LukeRequest$1 = new LukeRequest();
exports.LukeRequest = LukeRequest$1;

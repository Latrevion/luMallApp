"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  HomeBanner();
}
const HomeBanner = () => "./cpns/home-banner.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const HomeStore = store_home.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(HomeStore);
    common_vendor.onLoad(() => {
      HomeStore.fetchHomeMutilData();
    });
    function swiperItemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(swiperItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/class-learn/coderwhy/uniapp/luMallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);

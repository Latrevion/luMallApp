"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  _easycom_tab_control2();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control)();
}
const HomeBanner = () => "./cpns/home-banner.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomePopular = () => "./cpns/home-popular.js";
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
    function itemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function tabItemClick(index) {
      console.log(index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(swiperItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(itemClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(tabItemClick),
        f: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/class-learn/coderwhy/uniapp/luMallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["swiperItemClick"],
  setup(__props, { emit }) {
    function handlerClick(item) {
      emit("swiperItemClick", item.link);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handlerClick(item), item),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/class-learn/coderwhy/uniapp/luMallApp/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);

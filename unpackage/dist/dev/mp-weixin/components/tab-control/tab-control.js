"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tabItemClick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    function handlerItemClick(index) {
      currentIndex.value = index;
      emit("tabItemClick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (title, index, i0) => {
          return {
            a: common_vendor.t(title),
            b: common_vendor.n(currentIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => handlerItemClick(index), title),
            d: title
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/class-learn/coderwhy/uniapp/luMallApp/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);

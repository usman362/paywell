"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_files_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings */ "./resources/js/settings.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Item",
  props: ["file"],
  methods: {
    onDelete: function onDelete() {
      this.$emit("onDelete", this.file.id);
    },
    onEdit: function onEdit() {
      this.$emit("onEdit", this.file);
    },
    getImagePath: function getImagePath() {
      return this.file.logo ? this.file.logo : _settings__WEBPACK_IMPORTED_MODULE_0__.RootUrl + "/images/" + "camera.png";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_Item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Item.vue */ "./resources/js/components/Item.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Item: _components_Item_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.getFiles();
  },
  data: function data() {
    return {
      isShow: false,
      files: [],
      loading: false,
      mode: "add",
      id: undefined,
      searchQuerry: "",
      form: new Form({
        name: "",
        description: "",
        version: "",
        "package": "",
        url: "",
        logo: undefined,
        library_id: this.$route.params.id,
        type: 0
      })
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    _logout: "SIGN_OUT"
  })), {}, {
    closeModal: function closeModal() {
      this.isShow = false;
    },
    errorHas: function errorHas(name) {
      return this.form.errors.has(name);
    },
    getError: function getError(name) {
      return this.form.errors.get(name);
    },
    goBack: function goBack() {
      this.$router.back();
    },
    openModal: function openModal() {
      this.mode = "add";
      this.form.clear();
      this.form.reset();
      this.isShow = true;
    },
    submitHandler: function submitHandler() {
      this.mode === "add" ? this.addNewFile() : this.editFile();
    },
    onUrlChange: function onUrlChange(e) {
      var remove_spaces = e.split(" ").join("");
      var url = remove_spaces.split("%").join("");
      this.form.url = url;
    },
    onDelete: function onDelete(id) {
      var r = confirm("please confirm this action will delete this file permanently from our server.");
      if (r) {
        this.deleteFile(id);
      }
    },
    onEdit: function onEdit(f) {
      this.form.clear();
      this.form.reset();
      this.form.fill(f);
      switch (f.type) {
        case "apk":
          this.form.type = 0;
          break;
        case "pdf":
          this.form.type = 1;
          break;
        case "audio":
          this.form.type = 2;
          break;
        case "video":
          this.form.type = 3;
          break;
        case "other":
          this.form.type = 4;
          break;
        default:
          break;
      }
      this.mode = "edit";
      this.id = f.id;
      this.isShow = true;
    },
    signout: function signout() {
      var _this = this;
      this._logout().then(function (res) {
        _this.$router.go("login");
      });
    },
    getFiles: function getFiles() {
      var _this2 = this;
      this.loading = true;
      var loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false
      });
      this.form.get("allfiles/" + this.form.library_id).then(function (_ref) {
        var data = _ref.data;
        _this2.files = data;
      })["finally"](function () {
        loader.hide();
        _this2.loading = false;
      });
    },
    editFile: function editFile() {
      var _this3 = this;
      var loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false
      });
      this.form.put("editFile/" + this.id).then(function (_ref2) {
        var data = _ref2.data;
        _this3.$toast.show("file edit");
        _this3.form.clear();
        _this3.form.reset();
        _this3.id = undefined;
        _this3.isShow = false;
        _this3.files.map(function (f, i) {
          return f.id === data.id ? _this3.files[i] = data : null;
        });
      })["catch"](function (err) {
        console.log(err);
        _this3.$toast.show("failed to edit");
      })["finally"](function () {
        return loader.hide();
      });
    },
    addNewFile: function addNewFile() {
      var _this4 = this;
      var loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false
      });
      this.form.post("addnewFile").then(function (_ref3) {
        var data = _ref3.data;
        _this4.$toast.show("new file added");
        _this4.form.clear();
        _this4.form.reset();
        _this4.isShow = false;
        _this4.files.unshift(data);
      })["catch"](function (err) {
        _this4.$toast.show("failed to add new file");
      })["finally"](function () {
        loader.hide();
      });
    },
    deleteFile: function deleteFile(id) {
      var _this5 = this;
      var loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false
      });
      this.form["delete"]("deletefile/" + id).then(function () {
        _this5.$toast.show("file deleted");
        _this5.files.map(function (f, i) {
          return f.id === id ? _this5.files.splice(i, 1) : null;
        });
      })["catch"](function () {
        _this5.$toast.show("err");
      })["finally"](function () {
        return loader.hide();
      });
    },
    filesFilter: function filesFilter() {
      var _this6 = this;
      if (this.searchQuerry) {
        return this.files.filter(function (f) {
          return f.name.toLowerCase().indexOf(_this6.searchQuerry.toLowerCase()) > -1;
        });
      } else {
        return this.files;
      }
    },
    imageToBase64: function imageToBase64(e) {
      var _this7 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        _this7.form.logo = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["user", "authenticated"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/edit.png */ "./resources/js/assets/edit.png");
/* harmony import */ var _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu.png */ "./resources/js/assets/menu.png");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var _hoisted_1 = {
  "class": "card-container"
};
var _hoisted_2 = {
  "class": "top-action"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "info"
};
var _hoisted_5 = {
  "class": "bottom-info"
};
var _hoisted_6 = {
  key: 0,
  "class": "info-mini"
};
var _hoisted_7 = {
  "class": "v"
};
var _hoisted_8 = {
  key: 1,
  "class": "info-mini"
};
var _hoisted_9 = {
  "class": "v"
};
var _hoisted_10 = {
  key: 2,
  "class": "info-mini"
};
var _hoisted_11 = {
  "class": "v",
  style: {
    "color": "#2a4494"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "menu",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.onEdit();
    })
  }, _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, null, -1 /* CACHED */)]))), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "menu",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.onDelete();
    })
  }, _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, null, -1 /* CACHED */)])))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.getImagePath(),
    "class": "card-img"
  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.file.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.file.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$props.file.version ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "t"
  }, "app version", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.file.version), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.file["package"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "t"
  }, "app package", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.file["package"]), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.file.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "t"
  }, "download url", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.file.url), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_exit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/exit.png */ "./resources/js/assets/exit.png");
/* harmony import */ var _assets_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/search.png */ "./resources/js/assets/search.png");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = {
  "class": "top-bar"
};
var _hoisted_3 = {
  "class": "user-info"
};
var _hoisted_4 = {
  "class": "bottom-bar"
};
var _hoisted_5 = {
  "class": "controller-box"
};
var _hoisted_6 = {
  "class": "search"
};
var _hoisted_7 = {
  "class": "right-action"
};
var _hoisted_8 = {
  "class": "card-wrapper"
};
var _hoisted_9 = {
  "class": "modal"
};
var _hoisted_10 = {
  "class": "right-box"
};
var _hoisted_11 = {
  "class": "input-contianer"
};
var _hoisted_12 = {
  key: 0,
  "class": "err"
};
var _hoisted_13 = {
  "class": "input-contianer"
};
var _hoisted_14 = {
  "class": "input-contianer"
};
var _hoisted_15 = {
  key: 0,
  "class": "err"
};
var _hoisted_16 = {
  "class": "input-contianer"
};
var _hoisted_17 = {
  key: 0,
  "class": "err"
};
var _hoisted_18 = {
  key: 0,
  "class": "input-contianer"
};
var _hoisted_19 = {
  key: 0,
  "class": "err"
};
var _hoisted_20 = {
  key: 1,
  "class": "input-contianer"
};
var _hoisted_21 = {
  key: 0,
  "class": "err"
};
var _hoisted_22 = {
  "class": "input-contianer"
};
var _hoisted_23 = ["value"];
var _hoisted_24 = {
  key: 0,
  "class": "err"
};
var _hoisted_25 = {
  "class": "btn-container"
};
var _hoisted_26 = {
  "class": "blue-btn",
  type: "submit"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Item");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "back-nav-btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goBack();
    })
  }, " ← Dashboard "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ID: ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.user_login_token), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.email), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-box",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.signout();
    }, ["prevent"]))
  }, _toConsumableArray(_cache[15] || (_cache[15] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_exit_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logout"
  }, null, -1 /* CACHED */)])))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_search_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "search files",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.searchQuerry = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchQuerry]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.openModal();
    }, ["prevent"]))
  }, "add new file"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn-box\">+</button> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filesFilter(), function (file) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Item, {
      key: file.id,
      file: file,
      onOnDelete: $options.onDelete,
      onOnEdit: $options.onEdit
    }, null, 8 /* PROPS */, ["file", "onOnDelete", "onOnEdit"]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    modelValue: $data.isShow,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.isShow = $event;
    }),
    close: $options.closeModal
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "add new files", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "form-container",
        onSubmit: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.submitHandler();
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label\n            :class=\"{\n              active: form.logo,\n            }\"\n          >\n            <input type=\"file\" size=\"60\" @change=\"(e) => imageToBase64(e)\" />\n            <img src=\"../assets/camera.png\" />\n          </label> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Logo URL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "logo url",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.form.logo = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.logo]]), $options.errorHas('logo') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("logo")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "File type", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        name: "cars",
        id: "cars",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.form.type = $event;
        })
      }, _toConsumableArray(_cache[18] || (_cache[18] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "0"
      }, "apk", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "1"
      }, "pdf", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "2"
      }, "audio", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "3"
      }, "video", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: "4"
      }, "other", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Name", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: " Name",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.form.name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]), $options.errorHas('name') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("name")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "description",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.form.description = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.description]]), $options.errorHas('description') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("description")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.form.type == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Version", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "version",
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.form.version = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.version]]), $options.errorHas('version') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("version")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.type == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Package", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "package",
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.form["package"] = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form["package"]]]), $options.errorHas('package') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("package")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "File URL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "url",
        value: $data.form.url,
        onInput: _cache[10] || (_cache[10] = function ($event) {
          return $options.onUrlChange($event.target.value);
        })
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_23), $options.errorHas('url') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getError("url")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.mode === "add" ? "Add" : "Ok"), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "white-btn",
        onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.closeModal();
        }, ["prevent"]))
      }, " Close ")])], 32 /* NEED_HYDRATION */)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "close"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml body #app[data-v-2c619f04] {\n  margin: 0;\n  padding: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../styles/dashboard.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/dashboard.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../styles/modal.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/modal.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_modal_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.active[data-v-96d8a4f0] {\n  border: 1px solid green;\n}\n.cardanimate-enter-from[data-v-96d8a4f0] {\n  opacity: 0;\n  transform: rotate(90deg) scale(2);\n}\n.cardanimate-enter-active[data-v-96d8a4f0] {\n  transition: all 0.3s ease-out;\n}\n.cardanimate-leave-to[data-v-96d8a4f0] {\n  opacity: 0;\n  transform: rotate(-120deg) scale(-1);\n}\n.cardanimate-leave-active[data-v-96d8a4f0] {\n  transition: all 0.3s ease-in;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/dashboard.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/dashboard.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-color: #2a4494;\n    --secondary-color: #f1f5f8;\n    --white: #fff;\n    --black: #000;\n    font-family: \"Roboto\", sans-serif;\n}\n\nbody::-webkit-scrollbar {\n    width: 1em;\n}\n\nbody::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\nbody::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n}\n\n.card-container::-webkit-scrollbar {\n    width: 0.5em;\n}\n\n.card-container::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.card-container::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n}\n\n/* main div scrollbar  */\n\nmain::-webkit-scrollbar {\n    width: 0.7em;\n}\n\nmain::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\nmain::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n}\n\n.main {\n    background-color: var(--secondary-color);\n    height: 120%;\n    overflow: auto;\n    margin: 20px 30px 0px 30px;\n    border-top-right-radius: 40px;\n    border-top-left-radius: 40px;\n    padding: 5px 40px;\n    padding-bottom: 40px;\n    display: flex;\n    flex-direction: column;\n}\n.top-bar {\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 5px;\n    border-bottom: 1px solid lightgray;\n}\n.user-info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.user-info h2 {\n    font-size: 17px;\n    margin-bottom: 5px;\n    line-height: 18px;\n}\n.user-info p {\n    font-size: 12px !important;\n    margin: 0;\n}\n.top-bar p {\n    font-size: 17px;\n    color: gray;\n    letter-spacing: 1px;\n}\n.back-nav-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    min-height: 36px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #cdd5df;\n    background: #fff;\n    color: #1f2937;\n    font-size: 13px;\n    font-weight: 600;\n    line-height: 1;\n    text-decoration: none;\n    transition: background-color 0.2s, border-color 0.2s, color 0.2s;\n}\n.back-nav-btn:hover {\n    background: #f8fafc;\n    border-color: #9eb0c4;\n    color: #0f172a;\n}\n.controller-box {\n    margin-top: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.right-action {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.search {\n    height: 40px;\n    border-radius: 5px;\n    background-color: white;\n    display: flex;\n    align-items: center;\n    border: 1px solid lightgray;\n    padding: 0px 0px 0px 10px;\n    box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.22);\n    -webkit-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.22);\n    -moz-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.22);\n    transition: box-shadow 0.3s;\n}\n.search img {\n    width: 20px;\n    height: 20px;\n}\n.search input {\n    width: 200px;\n    background-color: white;\n    border-radius: 5px;\n    border: none;\n    padding: 5px 10px;\n}\n.search input:focus {\n    outline: none;\n}\n.right-action button {\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);\n    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);\n    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);\n    border: none;\n    border-radius: 8px;\n    height: 42px;\n    text-transform: capitalize;\n    transition: opacity 0.2s, transform 0.2s;\n}\n.btn {\n    background-color: var(--primary-color);\n    color: white;\n    padding: 0 16px;\n    min-height: 42px;\n    border: 1px solid transparent;\n    border-radius: 8px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1;\n    text-decoration: none;\n    box-shadow: 0 4px 10px rgba(31, 72, 126, 0.25);\n    transition: opacity 0.2s, transform 0.2s, background-color 0.2s;\n}\n.btn-box {\n    width: 40px;\n    background-color: white;\n    margin-left: 20px;\n    margin-top: 20px;\n    border: none;\n    height: 40px;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.33);\n    -webkit-box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.33);\n    -moz-box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.33);\n}\n.btn-box img {\n    width: 20px;\n    height: 20px;\n}\nbutton:hover,\n.btn:hover {\n    opacity: 0.92;\n    cursor: pointer;\n}\nbutton:disabled,\n.btn:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n.search:hover {\n    border: 1px solid lightblue;\n}\n\n.card-wrapper {\n    margin-top: 30px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    padding-bottom: 10px;\n}\n.card-container {\n    padding: 15px;\n    width: 200px;\n    max-height: 350px;\n    background-color: white;\n    box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.83);\n    -webkit-box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.83);\n    -moz-box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.83);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    margin-right: 20px;\n    margin-top: 30px;\n    transform: translateY(0px);\n    transition: all 0.3s;\n    overflow: auto;\n}\n.card-container img {\n    height: 68px;\n    width: 68px;\n}\n.info h1 {\n    font-size: 17px;\n    line-height: 20px;\n    margin-bottom: 10px;\n    text-transform: capitalize;\n}\n.info p {\n    line-height: 16px;\n}\n.card-container p {\n    font-size: 12px;\n}\n.card-container:hover {\n    box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.83);\n    -webkit-box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.83);\n    -moz-box-shadow: 0px 2px 20px -3px rgba(0, 0, 0, 0.83);\n    transform: translateY(-20px);\n}\n.top-action {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: sticky;\n    top: 0;\n}\n.menu {\n    padding-left: 10px;\n    transition: opacity 0.3s;\n}\n.menu img {\n    width: 20px;\n    height: 20px;\n}\n.menu:hover {\n    cursor: pointer;\n    opacity: 0.6;\n}\n.bottom-bar {\n    width: 100%;\n}\n.bottom-info {\n    word-wrap: break-word;\n    width: 100%;\n}\n.bottom-info p {\n    font-size: 15px;\n}\n\n.info-mini .t {\n    font-size: 10px;\n    text-transform: capitalize;\n    padding: 0;\n    margin-bottom: 2px;\n    line-height: 10px;\n}\n.info-mini .v {\n    font-size: 14px;\n    line-height: 16px;\n    color: black;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 2px;\n}\n\n@media only screen and (max-width: 700px) {\n    .main {\n        margin: 0px;\n        border-radius: 0;\n        padding: 0 5px;\n    }\n    .top-bar {\n        flex-direction: column;\n        height: 200px;\n        align-items: center;\n        justify-content: flex-start;\n    }\n    .controller-box {\n        margin-top: 10px;\n    }\n    .search input {\n        width: 120px;\n    }\n    .btn {\n        font-size: 12px;\n        padding: 0px 10px;\n    }\n    .top-bar p {\n        font-size: 13px;\n        margin: 2;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/modal.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/modal.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-color: #2a4494;\n    --white: #fff;\n    --black: #000;\n}\n\n.right-box {\n    width: 300px;\n    padding: 10px 20px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n}\n.right-box h1 {\n    margin-bottom: 5px;\n}\n.input-contianer {\n    margin-top: 10px;\n    margin-bottom: 3px;\n}\n.input-contianer > label {\n    display: block;\n    width: auto;\n    height: auto;\n    border: none;\n    color: #4b5563;\n    font-weight: 600;\n    letter-spacing: 0;\n    font-size: 13px;\n    padding: 0;\n    margin-bottom: 6px;\n}\n.input-contianer input:not([type=\"checkbox\"]):not([type=\"radio\"]),\n.input-contianer textarea,\n.input-contianer > select {\n    width: 90%;\n    height: 40px;\n    border: 1px solid #ebebe4;\n    border-radius: 7px;\n    padding: 0px 15px;\n    transition: border 0.3s;\n    box-sizing: border-box;\n}\n\n.input-contianer textarea {\n    width: 100%;\n    min-height: 90px;\n    padding: 10px 12px;\n    resize: vertical;\n}\n\n.input-contianer > select {\n    width: 100%;\n    text-indent: 0;\n}\n\n.line-container {\n    margin-top: 10px;\n    display: flex;\n}\n.line {\n    width: 40px;\n    height: 2px;\n    background-color: green;\n}\n.term {\n    display: flex;\n    align-items: center;\n}\n\n.checkbox-container {\n    margin-top: 12px;\n}\n\n.checkbox {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    border: 1px solid #ebebe4;\n    border-radius: 7px;\n    padding: 10px 12px;\n    box-sizing: border-box;\n}\n\n.checkbox span {\n    color: #4b5563;\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.checkbox input {\n    width: 18px;\n    height: 18px;\n    margin: 0;\n    cursor: pointer;\n}\n\n.radio-group {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 14px;\n    margin-top: 4px;\n}\n\n.radio-option {\n    display: inline-flex;\n    align-items: center;\n    gap: 7px;\n    color: #4b5563;\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.radio-option input[type=\"radio\"] {\n    margin: 0;\n}\n.form-container {\n    padding: 10px 0px;\n    transition: opacity 0.3s;\n}\n.overlay {\n    background-color: white;\n    padding-bottom: 15px;\n    border-radius: 10px;\n}\n.term p {\n    font-size: 13px;\n    color: gray;\n    letter-spacing: 1px;\n    margin-left: 5px;\n}\n.term a {\n    text-decoration: none;\n    padding: 0 5px;\n}\n.btn-container {\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n.btn-container button {\n    min-width: 120px;\n    height: 42px;\n    padding: 0 16px;\n    border: 1px solid transparent;\n    border-radius: 8px;\n    font-size: 14px;\n    font-weight: 600;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);\n    transition: background-color 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s;\n}\n.blue-btn {\n    background-color: var(--primary-color);\n    color: white;\n}\n.white-btn {\n    background-color: var(--white);\n    color: #1f2937;\n    border-color: #d1d5db;\n}\n\n/* custom file input  */\n.file-input-label {\n    display: table;\n    width: 90%;\n    height: 40px;\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n    font-size: 14px;\n    border: 1px solid #ebebe4;\n    border-radius: 7px;\n    padding: 0px 15px;\n    transition: border 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.err {\n    color: red;\n    font-size: 11px;\n}\n\n.file-input-label img {\n    width: 20px;\n    height: 20px;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\n/* end custom file input  */\n\n/* hover effects */\n\n.btn-container button:hover {\n    opacity: 0.95;\n    cursor: pointer;\n}\n.btn-container button:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n.input-contianer input:not([type=\"checkbox\"]):not([type=\"radio\"]):focus,\n.input-contianer textarea:focus,\n.input-contianer > select:focus {\n    outline: none;\n    border: 1px solid lightblue;\n}\n\n/* changing placeholder color  */\n\n::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n::-moz-placeholder {\n    /* Firefox 19+ */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n:-ms-input-placeholder {\n    /* IE 10+ */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n:-moz-placeholder {\n    /* Firefox 18- */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_style_index_0_id_2c619f04_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_style_index_0_id_2c619f04_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_style_index_0_id_2c619f04_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_style_index_0_id_96d8a4f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_style_index_0_id_96d8a4f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_style_index_0_id_96d8a4f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/assets/edit.png":
/*!**************************************!*\
  !*** ./resources/js/assets/edit.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/edit.png?a6a31de7f74c77d74e644c7c0fcae7bb");

/***/ }),

/***/ "./resources/js/assets/exit.png":
/*!**************************************!*\
  !*** ./resources/js/assets/exit.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/exit.png?f1040a65a7cf739ec75a41b24a470e2c");

/***/ }),

/***/ "./resources/js/assets/menu.png":
/*!**************************************!*\
  !*** ./resources/js/assets/menu.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/menu.png?37493fa75293c0a9ec816e7322373808");

/***/ }),

/***/ "./resources/js/assets/search.png":
/*!****************************************!*\
  !*** ./resources/js/assets/search.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/search.png?baa93abec9f6d309e1ead6c940f9defe");

/***/ }),

/***/ "./resources/js/components/Item.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Item.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item_vue_vue_type_template_id_2c619f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=2c619f04&scoped=true */ "./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true");
/* harmony import */ var _Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js */ "./resources/js/components/Item.vue?vue&type=script&lang=js");
/* harmony import */ var _Item_vue_vue_type_style_index_0_id_2c619f04_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css */ "./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css");
/* harmony import */ var _Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Item_vue_vue_type_template_id_2c619f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2c619f04"],['__file',"resources/js/components/Item.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Item.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Item.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Item.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_style_index_0_id_2c619f04_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=style&index=0&id=2c619f04&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_template_id_2c619f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Item_vue_vue_type_template_id_2c619f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Item.vue?vue&type=template&id=2c619f04&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Item.vue?vue&type=template&id=2c619f04&scoped=true");


/***/ }),

/***/ "./resources/js/views/files.vue":
/*!**************************************!*\
  !*** ./resources/js/views/files.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _files_vue_vue_type_template_id_96d8a4f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files.vue?vue&type=template&id=96d8a4f0&scoped=true */ "./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true");
/* harmony import */ var _files_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files.vue?vue&type=script&lang=js */ "./resources/js/views/files.vue?vue&type=script&lang=js");
/* harmony import */ var _files_vue_vue_type_style_index_0_id_96d8a4f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css */ "./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css");
/* harmony import */ var _Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_files_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_files_vue_vue_type_template_id_96d8a4f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-96d8a4f0"],['__file',"resources/js/views/files.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/files.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/views/files.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./files.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_style_index_0_id_96d8a4f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=style&index=0&id=96d8a4f0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true":
/*!********************************************************************************!*\
  !*** ./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_template_id_96d8a4f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_files_vue_vue_type_template_id_96d8a4f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./files.vue?vue&type=template&id=96d8a4f0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/files.vue?vue&type=template&id=96d8a4f0&scoped=true");


/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserDashboard",
  data: function data() {
    return {
      user: {},
      announcements: [],
      announcementsLoading: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["user"])),
  created: function created() {
    this.user = this.$store.getters.user || {};
    this.fetchAnnouncements();
  },
  methods: {
    formatDate: function formatDate(createdAt) {
      if (!createdAt) return "";
      return new Date(createdAt).toLocaleDateString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      });
    },
    fetchAnnouncements: function fetchAnnouncements() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.announcementsLoading = true;
              _context.p = 1;
              _context.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("announcements/");
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.announcements = data;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.announcements = [];
            case 4:
              _context.p = 4;
              _this.announcementsLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    signout: function signout() {
      var _this2 = this;
      this.$store.dispatch("SIGN_OUT").then(function () {
        return _this2.$router.push("/login");
      });
    }
  },
  mounted: function mounted() {
    if (this.$store.getters.user) this.user = this.$store.getters.user;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ "./resources/js/assets/logo.png");
/* harmony import */ var _assets_exit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/exit.png */ "./resources/js/assets/exit.png");
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
  "class": "announcements-feed"
};
var _hoisted_5 = {
  key: 0,
  "class": "feed-loading"
};
var _hoisted_6 = {
  key: 1,
  "class": "feed-empty"
};
var _hoisted_7 = {
  key: 2,
  "class": "feed-list"
};
var _hoisted_8 = {
  "class": "announcement-body"
};
var _hoisted_9 = {
  "class": "announcement-meta"
};
var _hoisted_10 = {
  "class": "dashboard-welcome"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Top Bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logo",
    style: {
      "height": "45px",
      "width": "70px"
    }
  }, null, -1 /* CACHED */)), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Dashboard")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.email), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn-box",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.signout && $options.signout.apply($options, arguments);
    }, ["prevent"]))
  }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_exit_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "logout"
  }, null, -1 /* CACHED */)])))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Announcements feed "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Announcements", -1 /* CACHED */)), $data.announcementsLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, "Loading…")) : $data.announcements.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, "No announcements yet.")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.announcements, function (a) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("article", {
      key: a.id,
      "class": "announcement-card"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(a.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(a.body), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(a.created_at)) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(a.creator ? ' · ' + a.creator.name : ''), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Welcome, " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.name) + ". Use the menu or links to manage your libraries and files.", 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../styles/dashboard.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/dashboard.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.announcements-feed[data-v-7eb83ab6] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  margin-top: 16px;\n  border: 1px solid #e0e0e0;\n}\n.announcements-feed h3[data-v-7eb83ab6] {\n  margin: 0 0 16px 0;\n  font-size: 18px;\n}\n.feed-loading[data-v-7eb83ab6],\n.feed-empty[data-v-7eb83ab6] {\n  color: #666;\n  padding: 12px 0;\n}\n.feed-list[data-v-7eb83ab6] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.announcement-card[data-v-7eb83ab6] {\n  padding: 14px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  background: #fafafa;\n}\n.announcement-card h4[data-v-7eb83ab6] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.announcement-body[data-v-7eb83ab6] {\n  margin: 0 0 8px 0;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: #333;\n}\n.announcement-meta[data-v-7eb83ab6] {\n  font-size: 12px;\n  color: #666;\n}\n.dashboard-welcome[data-v-7eb83ab6] {\n  margin-top: 20px;\n  padding: 16px;\n  background: #f5f5f5;\n  border-radius: 8px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_style_index_0_id_7eb83ab6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_style_index_0_id_7eb83ab6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_style_index_0_id_7eb83ab6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/assets/logo.png":
/*!**************************************!*\
  !*** ./resources/js/assets/logo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?babc2b82f419676ba7c74d74760a856b");

/***/ }),

/***/ "./resources/js/views/dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true */ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js */ "./resources/js/views/dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_7eb83ab6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css */ "./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css");
/* harmony import */ var _Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7eb83ab6"],['__file',"resources/js/views/dashboard.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_style_index_0_id_7eb83ab6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=style&index=0&id=7eb83ab6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dashboard_vue_vue_type_template_id_7eb83ab6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&scoped=true");


/***/ })

}]);
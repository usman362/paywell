"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminAnnouncements_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      announcements: [],
      announcementsLoading: false,
      allUsers: [],
      emailForm: {
        subject: "",
        body: "",
        recipient_type: "all",
        user_ids: []
      },
      emailSending: false,
      showAnnouncementModal: false,
      editId: null,
      announcementForm: {
        title: "",
        body: ""
      }
    };
  },
  created: function created() {
    this.fetchAnnouncements();
    this.fetchUsers();
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
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("announcements/");
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
    fetchUsers: function fetchUsers() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("allusers");
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.allUsers = data;
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              _this2.allUsers = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    openCreateAnnouncement: function openCreateAnnouncement() {
      this.editId = null;
      this.announcementForm = {
        title: "",
        body: ""
      };
      this.showAnnouncementModal = true;
    },
    openEditAnnouncement: function openEditAnnouncement(a) {
      this.editId = a.id;
      this.announcementForm = {
        title: a.title,
        body: a.body
      };
      this.showAnnouncementModal = true;
    },
    saveAnnouncement: function saveAnnouncement() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _e$response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              if (!_this3.editId) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put("announcements/".concat(_this3.editId), _this3.announcementForm);
            case 1:
              _this3.$toast.show("Announcement updated");
              _context3.n = 4;
              break;
            case 2:
              _context3.n = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("announcements/", _this3.announcementForm);
            case 3:
              _this3.$toast.show("Announcement created");
            case 4:
              _this3.showAnnouncementModal = false;
              _this3.fetchAnnouncements();
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t3 = _context3.v;
              _this3.$toast.show(((_e$response = _t3.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || "Failed to save");
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 5]]);
      }))();
    },
    deleteAnnouncement: function deleteAnnouncement(a) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _e$response2, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (confirm("Delete this announcement?")) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("announcements/".concat(a.id));
            case 2:
              _this4.$toast.show("Announcement deleted");
              _this4.fetchAnnouncements();
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              _this4.$toast.show(((_e$response2 = _t4.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || "Failed to delete");
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    },
    sendMassEmail: function sendMassEmail() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var payload, _yield$axios$post, data, _e$response3, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this5.emailSending = true;
              _context5.p = 1;
              payload = {
                subject: _this5.emailForm.subject,
                body: _this5.emailForm.body,
                recipient_type: _this5.emailForm.recipient_type
              };
              if (_this5.emailForm.recipient_type === "selected") {
                payload.user_ids = _this5.emailForm.user_ids || [];
              }
              _context5.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("mass-email/send", payload);
            case 2:
              _yield$axios$post = _context5.v;
              data = _yield$axios$post.data;
              _this5.$toast.show(data.message || "Email sent");
              _this5.emailForm = {
                subject: "",
                body: "",
                recipient_type: "all",
                user_ids: []
              };
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              _this5.$toast.show(((_e$response3 = _t5.response) === null || _e$response3 === void 0 || (_e$response3 = _e$response3.data) === null || _e$response3 === void 0 ? void 0 : _e$response3.message) || "Failed to send email");
            case 4:
              _context5.p = 4;
              _this5.emailSending = false;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ "./resources/js/assets/logo.png");
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
  "class": "admin-content"
};
var _hoisted_5 = {
  "class": "card"
};
var _hoisted_6 = {
  "class": "input-contianer"
};
var _hoisted_7 = {
  "class": "input-contianer"
};
var _hoisted_8 = {
  "class": "input-contianer"
};
var _hoisted_9 = {
  "class": "radio-group"
};
var _hoisted_10 = {
  "class": "radio-option"
};
var _hoisted_11 = {
  "class": "radio-option"
};
var _hoisted_12 = {
  key: 0,
  "class": "multi-select-wrap"
};
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "btn-container"
};
var _hoisted_15 = ["disabled"];
var _hoisted_16 = {
  "class": "card"
};
var _hoisted_17 = {
  "class": "section-head"
};
var _hoisted_18 = {
  key: 0,
  "class": "loading"
};
var _hoisted_19 = {
  key: 1,
  "class": "empty"
};
var _hoisted_20 = {
  key: 2,
  "class": "announcements-list"
};
var _hoisted_21 = {
  "class": "meta"
};
var _hoisted_22 = {
  "class": "body-preview"
};
var _hoisted_23 = {
  "class": "item-actions"
};
var _hoisted_24 = ["onClick"];
var _hoisted_25 = ["onClick"];
var _hoisted_26 = {
  "class": "modal"
};
var _hoisted_27 = {
  "class": "right-box"
};
var _hoisted_28 = {
  "class": "input-contianer"
};
var _hoisted_29 = {
  "class": "input-contianer"
};
var _hoisted_30 = {
  "class": "btn-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logo",
    style: {
      "height": "45px",
      "width": "70px"
    }
  }, null, -1 /* CACHED */)), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Announcements & Mass Email")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/dashboard",
    "class": "back-nav-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("← Dashboard", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Mass email "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Mass email", -1 /* CACHED */)), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "hint"
  }, "Send an email to all users or selected users.", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form-container",
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.sendMassEmail && $options.sendMassEmail.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Subject", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.emailForm.subject = $event;
    }),
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.emailForm.subject]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Message body", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.emailForm.body = $event;
    }),
    rows: "5",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.emailForm.body]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Recipients", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.emailForm.recipient_type = $event;
    }),
    value: "all"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.emailForm.recipient_type]]), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All active users", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.emailForm.recipient_type = $event;
    }),
    value: "selected"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.emailForm.recipient_type]]), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Selected users", -1 /* CACHED */))])]), $data.emailForm.recipient_type === 'selected' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Select users", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    multiple: "",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.emailForm.user_ids = $event;
    }),
    "class": "multi-select"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.allUsers, function (u) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: u.id,
      value: u.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.email) + ")", 9 /* TEXT, PROPS */, _hoisted_13);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.emailForm.user_ids]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "blue-btn",
    disabled: $data.emailSending
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.emailSending ? 'Sending…' : 'Send email'), 9 /* TEXT, PROPS */, _hoisted_15)])], 32 /* NEED_HYDRATION */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Announcements "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Announcements", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.openCreateAnnouncement && $options.openCreateAnnouncement.apply($options, arguments);
    })
  }, "+ New announcement")]), $data.announcementsLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, "Loading…")) : $data.announcements.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, "No announcements.")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.announcements, function (a) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: a.id,
      "class": "announcement-item"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(a.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(a.created_at)) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(a.creator ? ' · ' + a.creator.name : ''), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((a.body || '').slice(0, 120)) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((a.body || '').length > 120 ? '…' : ''), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn-link",
      onClick: function onClick($event) {
        return $options.openEditAnnouncement(a);
      }
    }, "Edit", 8 /* PROPS */, _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn-link danger",
      onClick: function onClick($event) {
        return $options.deleteAnnouncement(a);
      }
    }, "Delete", 8 /* PROPS */, _hoisted_25)])]);
  }), 128 /* KEYED_FRAGMENT */))]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create/Edit announcement modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    modelValue: $data.showAnnouncementModal,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.showAnnouncementModal = $event;
    }),
    close: function close() {
      return $data.showAnnouncementModal = false;
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.editId ? 'Edit' : 'New') + " announcement", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "form-container",
        onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.saveAnnouncement && $options.saveAnnouncement.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Title", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.announcementForm.title = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.announcementForm.title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Body", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.announcementForm.body = $event;
        }),
        rows: "4",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.announcementForm.body]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "blue-btn"
      }, "Save", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "white-btn",
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $data.showAnnouncementModal = false;
        })
      }, "Cancel")])], 32 /* NEED_HYDRATION */)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "close"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.admin-content[data-v-401ee1dc] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.card[data-v-401ee1dc] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  border: 1px solid #e0e0e0;\n}\n.card h2[data-v-401ee1dc] {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n}\n.hint[data-v-401ee1dc] {\n  color: #666;\n  font-size: 13px;\n  margin: 0 0 16px 0;\n}\n.section-head[data-v-401ee1dc] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-head h2[data-v-401ee1dc] {\n  margin: 0;\n}\n.loading[data-v-401ee1dc],\n.empty[data-v-401ee1dc] {\n  color: #666;\n  padding: 12px 0;\n}\n.announcements-list[data-v-401ee1dc] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.announcement-item[data-v-401ee1dc] {\n  padding: 12px 0;\n  border-bottom: 1px solid #eee;\n}\n.announcement-item[data-v-401ee1dc]:last-child {\n  border-bottom: none;\n}\n.body-preview[data-v-401ee1dc] {\n  margin: 6px 0 0 0;\n  font-size: 13px;\n  color: #555;\n}\n.meta[data-v-401ee1dc] {\n  font-size: 12px;\n  color: #888;\n  margin-left: 8px;\n  font-weight: normal;\n}\n.item-actions[data-v-401ee1dc] {\n  margin-top: 8px;\n}\n.item-actions .btn-link[data-v-401ee1dc] {\n  margin-right: 12px;\n}\n.btn-link.danger[data-v-401ee1dc] {\n  color: #c00;\n}\n.multi-select-wrap[data-v-401ee1dc] {\n  margin-top: 8px;\n}\n.multi-select-wrap > label[data-v-401ee1dc] {\n  display: block;\n  margin-bottom: 6px;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n}\n.multi-select[data-v-401ee1dc] {\n  min-height: 120px;\n  width: 100%;\n  max-width: 400px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_style_index_0_id_401ee1dc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_style_index_0_id_401ee1dc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_style_index_0_id_401ee1dc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/AdminAnnouncements.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/AdminAnnouncements.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminAnnouncements_vue_vue_type_template_id_401ee1dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true */ "./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true");
/* harmony import */ var _AdminAnnouncements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminAnnouncements.vue?vue&type=script&lang=js */ "./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js");
/* harmony import */ var _AdminAnnouncements_vue_vue_type_style_index_0_id_401ee1dc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css */ "./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css");
/* harmony import */ var _Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AdminAnnouncements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminAnnouncements_vue_vue_type_template_id_401ee1dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-401ee1dc"],['__file',"resources/js/views/AdminAnnouncements.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminAnnouncements.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_style_index_0_id_401ee1dc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=style&index=0&id=401ee1dc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_template_id_401ee1dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminAnnouncements_vue_vue_type_template_id_401ee1dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminAnnouncements.vue?vue&type=template&id=401ee1dc&scoped=true");


/***/ })

}]);
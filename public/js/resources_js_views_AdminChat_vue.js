"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminChat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=script&lang=js ***!
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
  data: function data() {
    return {
      rooms: [],
      selectedRoom: null,
      messages: [],
      newMessage: "",
      allUsers: [],
      roomMembers: [],
      showCreateModal: false,
      showManageModal: false,
      showAddMembersModal: false,
      createForm: {
        name: "",
        description: "",
        user_ids: []
      },
      manageForm: {
        name: "",
        description: ""
      },
      addMembersForm: {
        user_ids: []
      },
      pollTimer: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["user"])), {}, {
    usersNotInRoom: function usersNotInRoom() {
      if (!this.selectedRoom || !this.roomMembers.length) return this.allUsers;
      var inRoom = this.roomMembers.map(function (m) {
        return m.id;
      });
      return this.allUsers.filter(function (u) {
        return !inRoom.includes(u.id);
      });
    }
  }),
  created: function created() {
    this.fetchRooms();
    this.fetchUsers();
  },
  watch: {
    selectedRoom: function selectedRoom(room) {
      if (!room) this.stopPolling();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.stopPolling();
  },
  methods: {
    fetchRooms: function fetchRooms() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _e$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("chat/rooms");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.rooms = data;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              _this.$toast.show(((_e$response = _t.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || "Failed to load rooms");
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("chat/users");
            case 1:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.allUsers = data;
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    selectRoom: function selectRoom(room) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get3, data, _e$response2, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("chat/rooms/".concat(room.id));
            case 1:
              _yield$axios$get3 = _context3.v;
              data = _yield$axios$get3.data;
              _this3.selectedRoom = data.room;
              _this3.messages = data.messages || [];
              _this3.roomMembers = data.room.members || [];
              _this3.manageForm.name = data.room.name;
              _this3.manageForm.description = data.room.description || "";
              _this3.$nextTick(function () {
                return _this3.scrollToBottom();
              });
              _this3.startPolling();
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              _this3.$toast.show(((_e$response2 = _t3.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || "Failed to load room");
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    fetchMessages: function fetchMessages() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get4, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (_this4.selectedRoom) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("chat/rooms/".concat(_this4.selectedRoom.id, "/messages"));
            case 2:
              _yield$axios$get4 = _context4.v;
              data = _yield$axios$get4.data;
              _this4.messages = data;
              _this4.$nextTick(function () {
                return _this4.scrollToBottom();
              });
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              _this4.$toast.show("Failed to load messages");
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    },
    scrollToBottom: function scrollToBottom() {
      var el = this.$refs.messagesWrap;
      if (el) el.scrollTop = el.scrollHeight;
    },
    startPolling: function startPolling() {
      var _this5 = this;
      this.stopPolling();
      this.pollTimer = setInterval(function () {
        if (_this5.selectedRoom) _this5.fetchMessages();
      }, 3000);
    },
    stopPolling: function stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    },
    formatTime: function formatTime(createdAt) {
      if (!createdAt) return "";
      var d = new Date(createdAt);
      return d.toLocaleString();
    },
    openCreateRoom: function openCreateRoom() {
      this.createForm = {
        name: "",
        description: "",
        user_ids: []
      };
      this.showCreateModal = true;
    },
    createRoom: function createRoom() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _e$response3, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("chat/rooms", _this6.createForm);
            case 1:
              _this6.$toast.show("Room created");
              _this6.showCreateModal = false;
              _this6.fetchRooms();
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              _this6.$toast.show(((_e$response3 = _t5.response) === null || _e$response3 === void 0 || (_e$response3 = _e$response3.data) === null || _e$response3 === void 0 ? void 0 : _e$response3.message) || "Failed to create room");
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    openManageRoom: function openManageRoom() {
      if (!this.selectedRoom) return;
      this.roomMembers = _toConsumableArray(this.selectedRoom.members || []);
      this.manageForm.name = this.selectedRoom.name;
      this.manageForm.description = this.selectedRoom.description || "";
      this.showManageModal = true;
    },
    updateRoom: function updateRoom() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _e$response4, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().put("chat/rooms/".concat(_this7.selectedRoom.id), _this7.manageForm);
            case 1:
              _this7.$toast.show("Room updated");
              _this7.showManageModal = false;
              _this7.fetchRooms();
              _this7.selectedRoom = _this7.rooms.find(function (r) {
                return r.id === _this7.selectedRoom.id;
              }) || _this7.selectedRoom;
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              _this7.$toast.show(((_e$response4 = _t6.response) === null || _e$response4 === void 0 || (_e$response4 = _e$response4.data) === null || _e$response4 === void 0 ? void 0 : _e$response4.message) || "Failed to update");
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    confirmDeleteRoom: function confirmDeleteRoom() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _e$response5, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (confirm("Delete this room and all messages?")) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _context7.p = 1;
              _context7.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("chat/rooms/".concat(_this8.selectedRoom.id));
            case 2:
              _this8.$toast.show("Room deleted");
              _this8.showManageModal = false;
              _this8.selectedRoom = null;
              _this8.fetchRooms();
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t7 = _context7.v;
              _this8.$toast.show(((_e$response5 = _t7.response) === null || _e$response5 === void 0 || (_e$response5 = _e$response5.data) === null || _e$response5 === void 0 ? void 0 : _e$response5.message) || "Failed to delete");
            case 4:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 3]]);
      }))();
    },
    openAddMembers: function openAddMembers() {
      this.addMembersForm.user_ids = [];
      this.showAddMembersModal = true;
    },
    addMembers: function addMembers() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _e$response6, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (!(!_this9.selectedRoom || !_this9.addMembersForm.user_ids.length)) {
                _context8.n = 1;
                break;
              }
              _this9.showAddMembersModal = false;
              return _context8.a(2);
            case 1:
              _context8.p = 1;
              _context8.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("chat/rooms/".concat(_this9.selectedRoom.id, "/members"), {
                user_ids: _this9.addMembersForm.user_ids
              });
            case 2:
              _this9.$toast.show("Members added");
              _this9.showAddMembersModal = false;
              _this9.refreshSelectedRoom();
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t8 = _context8.v;
              _this9.$toast.show(((_e$response6 = _t8.response) === null || _e$response6 === void 0 || (_e$response6 = _e$response6.data) === null || _e$response6 === void 0 ? void 0 : _e$response6.message) || "Failed to add members");
            case 4:
              return _context8.a(2);
          }
        }, _callee8, null, [[1, 3]]);
      }))();
    },
    removeMember: function removeMember(member) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _e$response7, _t9;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (confirm("Remove ".concat(member.name, " from this room?"))) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _context9.p = 1;
              _context9.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("chat/rooms/".concat(_this0.selectedRoom.id, "/members/").concat(member.id));
            case 2:
              _this0.roomMembers = _this0.roomMembers.filter(function (m) {
                return m.id !== member.id;
              });
              _this0.refreshSelectedRoom();
              _context9.n = 4;
              break;
            case 3:
              _context9.p = 3;
              _t9 = _context9.v;
              _this0.$toast.show(((_e$response7 = _t9.response) === null || _e$response7 === void 0 || (_e$response7 = _e$response7.data) === null || _e$response7 === void 0 ? void 0 : _e$response7.message) || "Failed to remove");
            case 4:
              return _context9.a(2);
          }
        }, _callee9, null, [[1, 3]]);
      }))();
    },
    refreshSelectedRoom: function refreshSelectedRoom() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _yield$axios$get5, data;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (_this1.selectedRoom) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              _context0.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("chat/rooms/".concat(_this1.selectedRoom.id));
            case 2:
              _yield$axios$get5 = _context0.v;
              data = _yield$axios$get5.data;
              _this1.selectedRoom = _objectSpread(_objectSpread(_objectSpread({}, _this1.selectedRoom), data.room), {}, {
                members: data.room.members
              });
              _this1.roomMembers = data.room.members || [];
            case 3:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    sendMessage: function sendMessage() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var body, _e$response8, _t0;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              body = _this10.newMessage.trim();
              if (!(!body || !_this10.selectedRoom)) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              _context1.p = 1;
              _context1.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("chat/rooms/".concat(_this10.selectedRoom.id, "/messages"), {
                body: body
              });
            case 2:
              _this10.newMessage = "";
              _this10.fetchMessages();
              _context1.n = 4;
              break;
            case 3:
              _context1.p = 3;
              _t0 = _context1.v;
              _this10.$toast.show(((_e$response8 = _t0.response) === null || _e$response8 === void 0 || (_e$response8 = _e$response8.data) === null || _e$response8 === void 0 ? void 0 : _e$response8.message) || "Failed to send");
            case 4:
              return _context1.a(2);
          }
        }, _callee1, null, [[1, 3]]);
      }))();
    },
    deleteMessage: function deleteMessage(msg) {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var _e$response9, _t1;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              if (confirm("Delete this message?")) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              _context10.p = 1;
              _context10.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("chat/rooms/".concat(_this11.selectedRoom.id, "/messages/").concat(msg.id));
            case 2:
              _this11.messages = _this11.messages.filter(function (m) {
                return m.id !== msg.id;
              });
              _context10.n = 4;
              break;
            case 3:
              _context10.p = 3;
              _t1 = _context10.v;
              _this11.$toast.show(((_e$response9 = _t1.response) === null || _e$response9 === void 0 || (_e$response9 = _e$response9.data) === null || _e$response9 === void 0 ? void 0 : _e$response9.message) || "Failed to delete");
            case 4:
              return _context10.a(2);
          }
        }, _callee10, null, [[1, 3]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "main chat-main"
};
var _hoisted_2 = {
  "class": "top-bar"
};
var _hoisted_3 = {
  "class": "user-info"
};
var _hoisted_4 = {
  "class": "chat-layout"
};
var _hoisted_5 = {
  "class": "chat-rooms-panel"
};
var _hoisted_6 = {
  "class": "panel-header"
};
var _hoisted_7 = {
  "class": "rooms-list"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "room-name"
};
var _hoisted_10 = {
  "class": "room-meta"
};
var _hoisted_11 = {
  key: 0,
  "class": "empty-hint"
};
var _hoisted_12 = {
  "class": "chat-content"
};
var _hoisted_13 = {
  "class": "chat-header"
};
var _hoisted_14 = {
  key: 0,
  "class": "room-desc"
};
var _hoisted_15 = {
  "class": "header-actions"
};
var _hoisted_16 = {
  "class": "messages-wrap",
  ref: "messagesWrap"
};
var _hoisted_17 = {
  "class": "message-author"
};
var _hoisted_18 = {
  "class": "message-body"
};
var _hoisted_19 = {
  "class": "message-time"
};
var _hoisted_20 = ["onClick"];
var _hoisted_21 = {
  key: 1,
  "class": "no-room"
};
var _hoisted_22 = {
  "class": "modal"
};
var _hoisted_23 = {
  "class": "right-box"
};
var _hoisted_24 = {
  "class": "input-contianer"
};
var _hoisted_25 = {
  "class": "input-contianer"
};
var _hoisted_26 = {
  "class": "input-contianer"
};
var _hoisted_27 = ["value"];
var _hoisted_28 = {
  "class": "btn-container"
};
var _hoisted_29 = {
  "class": "modal"
};
var _hoisted_30 = {
  "class": "right-box"
};
var _hoisted_31 = {
  "class": "input-contianer"
};
var _hoisted_32 = {
  "class": "input-contianer"
};
var _hoisted_33 = {
  "class": "input-contianer"
};
var _hoisted_34 = {
  "class": "members-list"
};
var _hoisted_35 = ["onClick"];
var _hoisted_36 = {
  "class": "btn-container"
};
var _hoisted_37 = {
  "class": "modal"
};
var _hoisted_38 = {
  "class": "right-box"
};
var _hoisted_39 = {
  "class": "input-contianer"
};
var _hoisted_40 = ["value"];
var _hoisted_41 = {
  "class": "btn-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logo",
    style: {
      "height": "45px",
      "width": "70px"
    }
  }, null, -1 /* CACHED */)), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "ADMIN CHAT")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/dashboard",
    "class": "back-nav-btn"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("← Dashboard", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.email), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Chat rooms", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-small",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.openCreateRoom && $options.openCreateRoom.apply($options, arguments);
    })
  }, "+ New room")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.rooms, function (room) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: room.id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["room-item", {
        active: $data.selectedRoom && $data.selectedRoom.id === room.id
      }]),
      onClick: function onClick($event) {
        return $options.selectRoom(room);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(room.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(room.messages_count) + " msgs · " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(room.members_count) + " members", 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */)), $data.rooms.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, "No rooms yet. Create one.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$data.selectedRoom ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedRoom.name), 1 /* TEXT */), $data.selectedRoom.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedRoom.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-small",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.openManageRoom && $options.openManageRoom.apply($options, arguments);
    })
  }, "Manage room"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-small",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.openAddMembers && $options.openAddMembers.apply($options, arguments);
    })
  }, "Add members")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.messages, function (msg) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: msg.id,
      "class": "message-row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["message", {
        own: msg.user_id === _ctx.user.id
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(msg.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(msg.body), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatTime(msg.created_at)), 1 /* TEXT */), _ctx.user.role === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "class": "msg-delete",
      onClick: function onClick($event) {
        return $options.deleteMessage(msg);
      },
      title: "Delete message"
    }, " × ", 8 /* PROPS */, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "send-form",
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.sendMessage && $options.sendMessage.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.newMessage = $event;
    }),
    type: "text",
    placeholder: "Type a message...",
    maxlength: "5000"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newMessage]]), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn"
  }, "Send", -1 /* CACHED */))], 32 /* NEED_HYDRATION */)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, _toConsumableArray(_cache[26] || (_cache[26] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Select a room or create one to start chatting.", -1 /* CACHED */)]))))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create room modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    modelValue: $data.showCreateModal,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.showCreateModal = $event;
    }),
    close: function close() {
      return $data.showCreateModal = false;
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Create chat room", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "form-container",
        onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.createRoom && $options.createRoom.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Room name", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.createForm.name = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.createForm.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description (optional)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.createForm.description = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.createForm.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Add members (optional)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        multiple: "",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.createForm.user_ids = $event;
        }),
        "class": "multi-select"
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.allUsers, function (u) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: u.id,
          value: u.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.email) + ")", 9 /* TEXT, PROPS */, _hoisted_27);
      }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.createForm.user_ids]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "blue-btn",
        type: "submit"
      }, "Create", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "white-btn",
        type: "button",
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return $data.showCreateModal = false;
        })
      }, "Cancel")])], 32 /* NEED_HYDRATION */)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "close"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Manage room modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    modelValue: $data.showManageModal,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.showManageModal = $event;
    }),
    close: function close() {
      return $data.showManageModal = false;
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Manage room: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedRoom && $data.selectedRoom.name), 1 /* TEXT */), $data.selectedRoom ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 0,
        "class": "form-container",
        onSubmit: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.updateRoom && $options.updateRoom.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Room name", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $data.manageForm.name = $event;
        }),
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.manageForm.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $data.manageForm.description = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.manageForm.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Members", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_34, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.roomMembers, function (m) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: m.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.email) + ") ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          "class": "btn-link danger",
          onClick: function onClick($event) {
            return $options.removeMember(m);
          }
        }, "Remove", 8 /* PROPS */, _hoisted_35)]);
      }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "blue-btn",
        type: "submit"
      }, "Save", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "white-btn",
        type: "button",
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return $data.showManageModal = false;
        })
      }, "Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "white-btn",
        type: "button",
        onClick: _cache[14] || (_cache[14] = function () {
          return $options.confirmDeleteRoom && $options.confirmDeleteRoom.apply($options, arguments);
        }),
        style: {
          "margin-left": "8px"
        }
      }, "Delete room")])], 32 /* NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "close"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add members modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    modelValue: $data.showAddMembersModal,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.showAddMembersModal = $event;
    }),
    close: function close() {
      return $data.showAddMembersModal = false;
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Add members to room", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Select users", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        multiple: "",
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          return $data.addMembersForm.user_ids = $event;
        }),
        "class": "multi-select"
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.usersNotInRoom, function (u) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: u.id,
          value: u.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.name) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(u.email) + ")", 9 /* TEXT, PROPS */, _hoisted_40);
      }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.addMembersForm.user_ids]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "blue-btn",
        onClick: _cache[18] || (_cache[18] = function () {
          return $options.addMembers && $options.addMembers.apply($options, arguments);
        })
      }, "Add selected"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "white-btn",
        type: "button",
        onClick: _cache[19] || (_cache[19] = function ($event) {
          return $data.showAddMembersModal = false;
        })
      }, "Cancel")])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "close"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.chat-main[data-v-216861b8] {\n  height: calc(100vh - 100px);\n}\n.chat-layout[data-v-216861b8] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  gap: 16px;\n  margin-top: 16px;\n}\n.chat-rooms-panel[data-v-216861b8] {\n  width: 280px;\n  background: white;\n  border-radius: 8px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e0e0e0;\n}\n.panel-header[data-v-216861b8] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.panel-header h3[data-v-216861b8] {\n  margin: 0;\n  font-size: 16px;\n}\n.btn-small[data-v-216861b8] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.rooms-list[data-v-216861b8] {\n  overflow-y: auto;\n  flex: 1;\n}\n.room-item[data-v-216861b8] {\n  padding: 10px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  margin-bottom: 4px;\n}\n.room-item[data-v-216861b8]:hover {\n  background: #f0f0f0;\n}\n.room-item.active[data-v-216861b8] {\n  background: #1f487e;\n  color: white;\n}\n.room-name[data-v-216861b8] {\n  display: block;\n  font-weight: 600;\n}\n.room-meta[data-v-216861b8] {\n  font-size: 11px;\n  opacity: 0.85;\n}\n.empty-hint[data-v-216861b8] {\n  color: #666;\n  padding: 12px;\n}\n.chat-content[data-v-216861b8] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  min-width: 0;\n}\n.chat-header[data-v-216861b8] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.chat-header h3[data-v-216861b8] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n}\n.room-desc[data-v-216861b8] {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n}\n.header-actions[data-v-216861b8] {\n  display: flex;\n  gap: 8px;\n}\n.messages-wrap[data-v-216861b8] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.message-row[data-v-216861b8] {\n  display: flex;\n}\n.message[data-v-216861b8] {\n  max-width: 75%;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #f0f0f0;\n  position: relative;\n}\n.message.own[data-v-216861b8] {\n  background: #1f487e;\n  color: white;\n  margin-left: auto;\n}\n.message-author[data-v-216861b8] {\n  font-size: 11px;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 2px;\n}\n.message-body[data-v-216861b8] {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.message-time[data-v-216861b8] {\n  font-size: 10px;\n  opacity: 0.8;\n  display: block;\n  margin-top: 4px;\n}\n.msg-delete[data-v-216861b8] {\n  position: absolute;\n  top: 4px;\n  right: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.7;\n}\n.msg-delete[data-v-216861b8]:hover {\n  opacity: 1;\n}\n.send-form[data-v-216861b8] {\n  display: flex;\n  padding: 12px 16px;\n  border-top: 1px solid #eee;\n  gap: 8px;\n}\n.send-form input[data-v-216861b8] {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n}\n.no-room[data-v-216861b8] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n}\n.multi-select[data-v-216861b8] {\n  min-height: 120px;\n  width: 100%;\n}\n.members-list[data-v-216861b8] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.members-list li[data-v-216861b8] {\n  padding: 6px 0;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn-link.danger[data-v-216861b8] {\n  color: #c00;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_style_index_0_id_216861b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_style_index_0_id_216861b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_style_index_0_id_216861b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/AdminChat.vue":
/*!******************************************!*\
  !*** ./resources/js/views/AdminChat.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminChat_vue_vue_type_template_id_216861b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminChat.vue?vue&type=template&id=216861b8&scoped=true */ "./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true");
/* harmony import */ var _AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminChat.vue?vue&type=script&lang=js */ "./resources/js/views/AdminChat.vue?vue&type=script&lang=js");
/* harmony import */ var _AdminChat_vue_vue_type_style_index_0_id_216861b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css */ "./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css");
/* harmony import */ var _Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_muhammadusman_Sites_cursor_paywell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminChat_vue_vue_type_template_id_216861b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-216861b8"],['__file',"resources/js/views/AdminChat.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/AdminChat.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/AdminChat.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminChat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_style_index_0_id_216861b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=style&index=0&id=216861b8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_template_id_216861b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminChat_vue_vue_type_template_id_216861b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminChat.vue?vue&type=template&id=216861b8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/AdminChat.vue?vue&type=template&id=216861b8&scoped=true");


/***/ })

}]);
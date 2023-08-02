"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("./config");
var _app = _interopRequireDefault(require("./app"));
require("./database");
// debe importarse al inicio de la app

_app["default"].listen(4060);
console.log("Server on port", 4060);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

// export const PORT = process.env.PORT || 3040;
exports.MONGODB_URI = MONGODB_URI;
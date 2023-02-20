"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(str) {
    const formatted = str.replace(/[\s*/]+/g, "").toLowerCase();
    return formatted;
}
exports.default = format;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
function getHash(str) {
    const hash_one = ethers_1.ethers.utils.keccak256(Buffer.from(str, "utf8"));
    return hash_one;
}
exports.default = getHash;

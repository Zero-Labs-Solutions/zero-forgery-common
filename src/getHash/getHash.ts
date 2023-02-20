import { ethers } from "ethers";

export default function getHash(str: string) {
  const hash_one = ethers.utils.keccak256(Buffer.from(str, "utf8"));
  return hash_one;
}

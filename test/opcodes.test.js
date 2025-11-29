const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OpcodesExamples", function () {
  it("arithmetic and memory examples", async function () {
    const C = await ethers.getContractFactory("OpcodesExamples");
    const c = await C.deploy();
    await c.deployed();

    const [addOut, mulOut, subOut, divOut, modOut, expOut] = await c.arithmetic(3, 4);
    expect(addOut).to.equal(ethers.BigNumber.from(7));
    expect(mulOut).to.equal(ethers.BigNumber.from(12));
    expect(subOut).to.equal(ethers.BigNumber.from(0)); // 3-4 underflow in unsigned => 0 in solidity high-level, assembly uses wrap-around. Adjust if needed.

    const mem = await c.memoryOps(0x42);
    // mem.loaded should be 0x42
    // The returned tuple is (loaded, msize)
    expect(mem[0]).to.equal(ethers.BigNumber.from(0x42));
  });

  it("keccak example", async function () {
    const C = await ethers.getContractFactory("OpcodesExamples");
    const c = await C.deploy();
    await c.deployed();

    const data = ethers.utils.toUtf8Bytes("hello");
    const callRes = await c.keccakExample(data);
    const expected = ethers.utils.keccak256(data);
    expect(callRes).to.equal(expected);
  });
});

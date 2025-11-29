# evm-opcodes-examples

Minimal educational repo that demonstrates EVM opcodes via Solidity inline assembly.

## Quick start (Hardhat)

1. `git init && git add . && git commit -m "start"`
2. Install:

3. Create `hardhat.config.ts` (see example below).
4. Compile:

5. Run a local node & tests:


## What it contains
- `contracts/OpcodesExamples.sol` — many small functions exercising arithmetic, bitwise, memory, storage, hashing, environment, call, and logging opcodes.

## Notes & next steps
- I avoided unsafe `selfdestruct`/`create` examples in-production; add carefully in tests.
- If you want I can:
- produce a second contract that provably emits exact opcodes for each function (disassemble with `hardhat node` and `evm` traces),
- add a test suite calling each function and asserting outputs,
- add a script that runs `hardhat flatten` + `evm opcodes` to list exact opcodes produced.

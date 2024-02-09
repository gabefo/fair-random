import assert from "node:assert/strict";
import { describe, it } from "node:test";
import FairRandom from "../index.js";

describe("random", () => {
  it("should return a number between 0 and 1", () => {
    const fairRandom = new FairRandom("server_seed", "client_seed", 0);
    const number = fairRandom.random();
    assert.ok(number >= 0 && number < 1);
  });

  it("should return the same number for the same seeds", () => {
    const fairRandom1 = new FairRandom("zw4gOuxMLv", "DoIYFuoZzQ", 0);
    const fairRandom2 = new FairRandom("zw4gOuxMLv", "DoIYFuoZzQ", 0);

    for (let i = 0; i < 100; i++) {
      assert.equal(fairRandom1.random(), fairRandom2.random());
    }
  });
});

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import create from "../index.js";

describe("random", () => {
  it("should return a number between 0 and 1", () => {
    const random = create("server_seed", "client_seed", 0);
    const number = random();
    assert.ok(number >= 0 && number < 1);
  });

  it("should return the same number for the same seeds", () => {
    const random1 = create("zw4gOuxMLv", "DoIYFuoZzQ", 0);
    const random2 = create("zw4gOuxMLv", "DoIYFuoZzQ", 0);

    for (let i = 0; i < 100; i++) {
      assert.equal(random1(), random2());
    }
  });
});

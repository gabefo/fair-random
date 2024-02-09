import { createHmac } from "crypto";

export default function create(serverSeed, clientSeed, nonce) {
  let currentRound = 0;
  let currentRoundCursor = 0;
  let buffer;

  return function random() {
    if (currentRoundCursor === 0) {
      const hmac = createHmac("sha256", serverSeed);
      hmac.update(`${clientSeed}:${nonce}:${currentRound}`);
      buffer = hmac.digest();
    }

    let result = 0;

    for (let i = 0; i < 4; i++) {
      const value = buffer[currentRoundCursor++];
      const divider = 256 ** (i + 1);
      const partialResult = value / divider;
      result += partialResult;
    }

    if (currentRoundCursor === 32) {
      currentRoundCursor = 0;
      currentRound++;
    }

    return result;
  };
}

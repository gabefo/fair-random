import { createHmac } from "crypto";

export default class FairRandom {
  constructor(serverSeed, clientSeed, nonce) {
    this._serverSeed = serverSeed;
    this._clientSeed = clientSeed;
    this._nonce = nonce;
    this._currentRound = 0;
    this._currentRoundCursor = 0;
    this._buffer;
  }

  random() {
    if (this._currentRoundCursor === 0) {
      const hmac = createHmac("sha256", this._serverSeed);
      hmac.update(`${this._clientSeed}:${this._nonce}:${this._currentRound}`);
      this._buffer = hmac.digest();
    }

    let result = 0;

    for (let i = 0; i < 4; i++) {
      const value = this._buffer[this._currentRoundCursor++];
      const divider = 256 ** (i + 1);
      const partialResult = value / divider;
      result += partialResult;
    }

    if (this._currentRoundCursor === 32) {
      this._currentRoundCursor = 0;
      this._currentRound++;
    }

    return result;
  }
}

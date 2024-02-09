/**
 * Create a new instance of the provably fair number generator.
 */
export default class FairRandom {
  constructor(serverSeed: string, clientSeed: string, nonce: number);
  random(): number;
}

/**
 * Create a new instance of the provably fair number generator.
 */
export default function create(
  serverSeed: string,
  clientSeed: string,
  nonce: number
): () => number;

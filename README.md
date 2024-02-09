# Fair Random

> A simple utility to generate random numbers using a provable fair algorithm.

## Install

```
$ npm install fair-random
```

## Usage

```js
import FairRandom from "fair-random";

const fairRandom = new FairRandom("server_seed", "client_seed", 0);

const num1 = fairRandom.random();
//=> 0.5588404021691531

const num2 = fairRandom.random();
//=> 0.569565019570291
```

## API

Class: `FairRandom`

`new FairRandom(serverSeed, clientSeed, nonce)`

- `serverSeed` string: A secret seed provided by the server.
- `clientSeed` string: A seed provided by the client. This allows the client to have an influence on the randomness.
- `nonce` number: A number that is incremented with each bet to ensure different outcomes.

Creates a new `FairRandom` object containing the `random` method.

`fairRandom.random()`

- Returns: number

Returns a number that's greater than or equal to 0 and less than 1. This function utilises the cryptographic hash function
`HMAC_SHA256` to generate bytes which are then used to generate floats between 0 and 1.

## License

This project is licensed under the MIT License.

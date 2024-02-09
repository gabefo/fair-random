# Fair Random

> A simple utility to generate random numbers using a provable fair algorithm.

## Install

```
$ npm install fair-random
```

## Usage

```js
import create from "fair-number";

const random = create("server_seed", "client_seed", 0);

const num1 = random();
//=> 0.5588404021691531

const num2 = random();
//=> 0.569565019570291
```

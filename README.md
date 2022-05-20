# Random

The `random` module provides a minimal set of helper functions for various
random operations. You can import individual functions from the module or import
the default object and call methods on it:

```ts
import { coin, color } from "./mod.ts";

if (coin()) {
  const bg = color(0, 150);
}
```

```ts
import random from "./mod.ts";

if (random.coin()) {
  const bg = random.color(0, 150);
}
```

The module contains these functions:

### coin

Flip a coin to get `true` or `false`.

```ts
const heads = random.coin();
```

### int

Pick an integer between two numbers (inclusive).

```ts
const num = random.int(1, 10);
```

### rgb

Get an object with random integers for `r`, `g`, and `b` properties, optionally
within a range.

```ts
const { r, g, b } = random.rgb();
const { r, g, b } = random.rgb(100, 255);
```

### color

Get a random `rgb()` CSS color string, optionally within a range.

```ts
const color = random.color();
const color = random.color(100, 255);
```

### element

Pick a random element from an array.

```ts
const fruit = random.element(["apple", "banana", "orange"]);
```

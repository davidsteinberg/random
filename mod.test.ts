import { coin, color, element, int, rgb } from "./mod.ts";
import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std@0.139.0/testing/asserts.ts";

const withOverriddenRandomValue = (value: number, fn: () => void) => {
  const { random } = Math;
  Math.random = () => value;
  fn();
  Math.random = random;
};

// coin
Deno.test("coin return true below 0.5", () => {
  withOverriddenRandomValue(0.49, () => {
    assertStrictEquals(coin(), true);
  });
});

Deno.test("coin return false above 0.5", () => {
  withOverriddenRandomValue(0.51, () => {
    assertStrictEquals(coin(), false);
  });
});

// int
Deno.test("int rounds number", () => {
  withOverriddenRandomValue(0.4, () => {
    assertStrictEquals(int(1, 1), 1);
  });
});

Deno.test("int rounds number down correctly", () => {
  withOverriddenRandomValue(0.3, () => {
    assertStrictEquals(int(0, 1), 0);
    assertStrictEquals(int(1, 2), 1);
  });
});

Deno.test("int rounds number up correctly", () => {
  withOverriddenRandomValue(0.6, () => {
    assertStrictEquals(int(0, 1), 1);
    assertStrictEquals(int(1, 2), 2);
  });
});

Deno.test("int rounds number correctly", () => {
  withOverriddenRandomValue(0.6, () => {
    assertStrictEquals(int(0, 17), 10);
    assertStrictEquals(int(100, 333), 240);
  });
});

// rgb
Deno.test("rgb returns an object with r, g, b properties", () => {
  withOverriddenRandomValue(10, () => {
    assertEquals(rgb(0, 0), { r: 10, g: 10, b: 10 });
  });
});

// color
Deno.test("color returns an rgb string", () => {
  withOverriddenRandomValue(10, () => {
    assertStrictEquals(color(0, 0), "rgb(10, 10, 10)");
  });
});

// element
Deno.test("element returns undefined when given an empty array", () => {
  assertStrictEquals(element([]), undefined);
});

Deno.test("element returns a random array element", () => {
  withOverriddenRandomValue(0.6, () => {
    assertStrictEquals(element([1, 2, 3]), 2);
  });
});

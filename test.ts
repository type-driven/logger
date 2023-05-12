import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("Passing fake test.", () => {
  assertStrictEquals(true, true);
});

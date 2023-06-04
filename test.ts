import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Passing fake test.", () => {
  assertStrictEquals(true, true);
});

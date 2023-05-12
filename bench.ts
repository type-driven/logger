import log from "./mod.ts";
import * as builtin from "https://deno.land/std/log/mod.ts";
import * as denoLogger from "https://deno.land/x/denologger/mod.ts";

const payload = {
  hello: "deno",
  foo: ["bar", "baz"],
  boo: {
    ba: [{ ba: "boom" }],
  },
};

Deno.bench("builtin", { group: "perf" }, () => {
  builtin.debug("hello", payload);
});

Deno.bench("denoLogger", { group: "perf" }, () => {
  denoLogger.log.debug("hello", payload);
});

Deno.bench("logger", { baseline: true, group: "perf" }, () => {
  log.debug("hello", payload);
});
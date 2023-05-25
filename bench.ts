import { logger } from "./mod.ts";
import * as builtin from "https://deno.land/std/log/mod.ts";
import * as denoLogger from "https://deno.land/x/denologger/mod.ts";
import { pino as P } from "npm:pino";

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

const pino = P();

Deno.bench("pino", { group: "perf" }, () => {
  pino.debug("hello", payload);
});

Deno.bench("logger", { baseline: true, group: "perf" }, () => {
  logger.debug("hello", payload);
});

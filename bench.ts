import * as builtin from "https://deno.land/std/log/mod.ts";
import * as denoLogger from "https://deno.land/x/denologger/mod.ts";
import { pino as P } from "npm:pino";
import { getLogger, setup } from "./mod.ts";
import { json_handler } from "./json_handler.ts";

const payload = {
  hello: "deno",
  foo: ["bar", "baz"],
  boo: {
    ba: [{ ba: "boom" }],
  },
};

Deno.bench("builtin", { group: "perf" }, () => {
  builtin.info("hello", payload);
});

Deno.bench("denoLogger", { group: "perf" }, () => {
  denoLogger.log.info("hello", payload);
});

const pino = P();

Deno.bench("pino", { group: "perf" }, () => {
  pino.info(payload, "hello");
});

setup({
  handlers: {
    json: json_handler,
  },
  loggers: {
    default: {
      handlers: ["json"],
      level: "INFO",
    },
  },
});

const logger = getLogger();

Deno.bench("logger", { baseline: true, group: "perf" }, () => {
  logger.info("hello", payload);
});

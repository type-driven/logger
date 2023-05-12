import log from "./mod.ts";
import * as denoLog from "https://deno.land/std/log/mod.ts";

Deno.bench("builtin", { group: "perf" }, () => {
  denoLog.debug("hello");
});

Deno.bench("logger", { baseline: true, group: "perf" }, () => {
  log.debug("hello");
});

import { config } from "./config.ts";
import { console_handler } from "./console_handler.ts";
import { json_handler } from "./json_handler.ts";
import { getLogger, setup } from "./mod.ts";

setup({
  handlers: {
    console: console_handler,
    json: json_handler,
    // file,
  },
  loggers: {
    default: {
      handlers: ["json"],
      level: config.level,
    },
    pretty: {
      handlers: ["console"],
      level: config.level,
    },
  },
});

const logger = getLogger("pretty");

logger.info(
  "hello",
  {
    config,
    a: { b: { c: [{ d: 1 }] } },
  },
  1,
  "2",
  [],
  {},
  null,
  undefined,
);

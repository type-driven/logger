import { config } from "./config.ts";
import { console_handler, pretty_console_handler } from "./console_handler.ts";
import { getLogger, setup } from "./mod.ts";

setup({
  handlers: {
    default: console_handler,
    pretty: pretty_console_handler, // pretty,
    // file,
  },
  loggers: {
    default: {
      handlers: ["default"],
      level: config.level,
    },
    pretty: {
      handlers: ["pretty"],
      level: config.level,
    },
    both: {
      handlers: ["default", "pretty"],
      level: config.level,
    },
  },
});

const logger = getLogger("both");

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

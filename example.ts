import { console_handler, pretty_console_handler } from "./console_handler.ts";
import { getLogger, setup } from "./mod.ts";

setup({
  handlers: {
    default: console_handler("DEBUG"),
    pretty: pretty_console_handler("DEBUG"), // pretty,
    // file,
  },
  loggers: {
    default: {
      handlers: ["default"],
      level: "DEBUG",
    },
    pretty: {
      handlers: ["pretty"],
      level: "DEBUG",
    },
    both: {
      handlers: ["default", "pretty"],
      level: "DEBUG",
    },
  },
});

const logger = getLogger("both");

logger.info(
  "hello",
  {
    a: { b: { c: [{ d: 1 }] } },
  },
  1,
  "2",
  [],
  {},
  null,
  undefined,
);

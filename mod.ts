import { config } from "./config.ts";
import { console_handler } from "./console_handler.ts";
import { getLogger, setup } from "./deps.ts";

setup({
  handlers: {
    console: console_handler,
    // file,
  },
  loggers: {
    default: {
      handlers: ["console"],
      level: config.level,
    },
  },
});

const log = getLogger();
log.debug("Application logger loaded.", { config });

export const logger = log;

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

export default log;
export const stringify = <T extends unknown>(v: T) =>
  JSON.stringify(v, null, 4);

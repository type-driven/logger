import { config } from "./config.ts";
import { ConsoleHandler } from "./deps.ts";
import { formatter } from "./formatter.ts";

export const console_handler = new ConsoleHandler(config.level, {
  formatter,
});

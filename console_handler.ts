import { config } from "./config.ts";
import { ConsoleHandler } from "./deps.ts";
import { json, pretty } from "./formatter.ts";

export const console_handler = new ConsoleHandler(config.level, {
  formatter: json,
});

export const pretty_console_handler = new ConsoleHandler(config.level, {
  formatter: pretty,
});

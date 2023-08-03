import { LevelName } from "https://deno.land/std@0.182.0/log/mod.ts";
import { ConsoleHandler } from "./deps.ts";
import { json, pretty } from "./formatter.ts";

export const console_handler = (level: LevelName) =>
  new ConsoleHandler(level, {
    formatter: json,
  });

export const pretty_console_handler = (level: LevelName) =>
  new ConsoleHandler(level, {
    formatter: pretty,
  });

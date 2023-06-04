import { config } from "./config.ts";
import { FileHandler } from "./deps.ts";
import { json } from "./formatter.ts";

export const file_handler = new FileHandler(config.level, {
  filename: config.filename,
  formatter: json,
});

export const pretty_file_handler = new FileHandler(config.level, {
  filename: config.filename,
  formatter: json,
});

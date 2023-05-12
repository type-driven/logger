import { config } from "./config.ts";
import { FileHandler } from "./deps.ts";
import { formatter } from "./formatter.ts";

export const file_handler = new FileHandler(config.level, {
  filename: config.filename,
  formatter,
});

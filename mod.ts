export { console_handler, pretty_console_handler } from "./console_handler.ts";
export { file_handler, pretty_file_handler } from "./file_handler.ts";
export { json_handler, JsonHandler } from "./json_handler.ts";
export {
  BaseHandler,
  ConsoleHandler,
  getLogger,
  LogLevels,
  type LogRecord,
  setup,
} from "./deps.ts";

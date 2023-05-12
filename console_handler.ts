import { config } from "./config.ts";
import {
  BaseHandler,
  bold,
  cyan,
  gray,
  LogLevels,
  LogRecord,
  red,
  yellow,
} from "./deps.ts";
import { formatter } from "./formatter.ts";

export class ConsoleHandler extends BaseHandler {
  override format(logRecord: LogRecord): string {
    const msg = super.format(logRecord);
    switch (logRecord.level) {
      case LogLevels.DEBUG:
        return gray(msg);
      case LogLevels.INFO:
        return cyan(msg);
      case LogLevels.WARNING:
        return yellow(msg);
      case LogLevels.ERROR:
        return red(msg);
      case LogLevels.CRITICAL:
        return bold(red(msg));
      default:
        return msg;
    }
  }

  override log(msg: string) {
    console.log(msg);
  }
}

export const console_handler = new ConsoleHandler(config.level, {
  formatter,
});

import { config } from "./config.ts";
import { BaseHandler, LogRecord } from "./deps.ts";
import { json } from "./formatter.ts";
import stringify from "./stringify.ts";

export class JsonHandler extends BaseHandler {
  override format(logRecord: LogRecord): string {
    if (this.formatter instanceof Function) {
      return this.formatter(logRecord);
    }

    return this.formatter.replace(/{([^\s}]+)}/g, (match, p1): string => {
      const value = logRecord[p1 as keyof LogRecord];

      // do not interpolate missing values
      if (value == null) {
        return match;
      }

      if (typeof value === "object") {
        return stringify(value);
      }

      return String(value);
    });
  }

  override log(str: string): void {
    console.log(str);
  }
}

export const json_handler = new JsonHandler(config.level, {
  formatter: json,
});

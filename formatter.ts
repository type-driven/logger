import { formatDate, LogRecord } from "./deps.ts";
import stringify from "./stringify.ts";

export const formatter = (record: LogRecord) =>
  [
    `[${record.levelName}] ${
      formatDate("yyyy MM dd mm:ss", record.datetime)
    } ${record.msg}`,
    ...record.args.map((arg) =>
      typeof arg === "object" ? stringify(arg, 4) : `${arg}`
    ),
  ].join(" ");

import { formatDate, LogRecord } from "./deps.ts";

export const formatter = (record: LogRecord) =>
  [
    `[${record.levelName}] ${
      formatDate("yyyy MM dd mm:ss", record.datetime)
    } ${record.msg}`,
    ...record.args.map((arg) =>
      typeof arg === "object" ? JSON.stringify(arg, null, 4) : `${arg}`
    ),
  ].join(" ");

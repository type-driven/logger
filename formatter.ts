import { formatDate, LogRecord } from "./deps.ts";
import stringify from "./stringify.ts";

const hostname = Deno.hostname();
const pid = Deno.pid;

const argsToObject = ({ args, datetime }: LogRecord) =>
  // deno-lint-ignore ban-types
  args.reduce((o: {}, a) => (typeof a === "object" ? { ...o, ...a } : o), {
    datetime: datetime.getTime(),
    pid,
    hostname,
  });

const prettyDate = ({ datetime }: LogRecord) =>
  formatDate("yyyy MM dd mm:ss", datetime);

export const pretty = (record: LogRecord) =>
  [
    `${record.loggerName}:`,
    `[${record.levelName}]`,
    `${prettyDate(record)} ${record.msg}`,
    stringify(argsToObject(record), 4),
  ].join(" ");

export const json = (record: LogRecord) =>
  stringify({
    ...record,
    ...argsToObject(record),
  });

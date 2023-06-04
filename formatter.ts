import { formatDate, LogRecord } from "./deps.ts";
import stringify from "./stringify.ts";

export const pretty = (record: LogRecord) =>
  [
    `[${record.levelName}] ${
      formatDate("yyyy MM dd mm:ss", record.datetime)
    } ${record.msg}`,
    ...record.args.map((arg) =>
      typeof arg === "object" ? stringify(arg, 4) : `${arg}`
    ),
  ].join(" ");

const hostname = Deno.hostname();
const pid = Deno.pid;

const argsToObject = ({ args, datetime }: LogRecord) =>
  // deno-lint-ignore ban-types
  args.reduce((o: {}, a) => (typeof a === "object" ? { ...o, ...a } : o), {
    datetime: datetime.getTime(),
    pid,
    hostname,
  });

export const json = (record: LogRecord) =>
  stringify({
    ...record,
    ...argsToObject(record),
  });

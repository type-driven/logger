// Totally stolen from: https://github.com/sindresorhus/safe-stringify/blob/main/index.js
// deno-lint-ignore ban-types
function replacer(seen: WeakSet<{}>) {
  return function (_key: string, value: unknown) {
    if (value instanceof Error) {
      return Error.toString();
    }
    if (value !== null && typeof value === "object") {
      if (seen.has(value)) {
        return "[Circular]";
      }

      seen.add(value);

      const newValue = Array.isArray(value) ? [] : {};

      for (const [key2, value2] of Object.entries(value)) {
        // @ts-expect-error no-index-signature
        newValue[key2] = replacer(seen)(key2, value2);
      }

      seen.delete(value);

      return newValue;
    }

    return value;
  };
}

export default function stringify(object: unknown, indentation = 2) {
  const seen = new WeakSet();
  return JSON.stringify(object, replacer(seen), indentation);
}

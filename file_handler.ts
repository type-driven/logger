import { LevelName } from "https://deno.land/std@0.182.0/log/mod.ts";
import { FileHandler } from "./deps.ts";
import { json } from "./formatter.ts";

export const file_handler = (level: LevelName, filename: string) =>
  new FileHandler(level, {
    filename,
    formatter: json,
  });

export const pretty_file_handler = (level: LevelName, filename: string) =>
  new FileHandler(level, {
    filename,
    formatter: json,
  });

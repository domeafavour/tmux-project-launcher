import fs from "node:fs";
import { ProjectConfig } from "./typings";

export function readProjectConfig(filePath: string): ProjectConfig {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as ProjectConfig;
}

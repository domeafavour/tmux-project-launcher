import { ProjectConfig } from "./typings";

const cmdTemplate =
  "tmuxinator start {{project}} -n {{name}} {{root}} {{settings}}";

export function generateCommand(config: ProjectConfig): string {
  const settingsStr = config.settings
    ? Object.entries(config.settings)
        .map(([key, value]) => `${key}=${value}`)
        .join(" ")
    : "";

  return cmdTemplate
    .replace("{{project}}", config.project)
    .replace("{{name}}", config.name)
    .replace("{{root}}", config.root)
    .replace("{{settings}}", settingsStr);
}

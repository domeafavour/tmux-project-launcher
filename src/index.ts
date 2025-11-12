import fs from "node:fs";
import path from "node:path";
import prompts from "prompts";
import { generateCommand } from "./generateCommand";
import { readProjectConfig } from "./readProjectConfig";
import { ProjectConfig } from "./typings";

const configPath = path.resolve(__dirname, "..", ".config");

const fileNames = fs.readdirSync(configPath);

const configs: ProjectConfig[] = [];

fileNames.forEach((fileName) => {
  configs.push(readProjectConfig(path.resolve(configPath, fileName)));
});

async function main() {
  const choices = configs.map((config) => ({
    title: `${config.name}`,
    value: config,
    description: config.description
      ? `${config.description} | ${config.root}`
      : `${config.root}`,
  }));

  const response = await prompts({
    type: "select",
    name: "config",
    message: "Select a project to launch:",
    choices,
    initial: 0,
  });

  if (response.config) {
    const command = generateCommand(response.config);
    console.log("\nGenerated command:");
    console.log(command);
  } else {
    console.log("No project selected.");
  }
}

main().catch(console.error);

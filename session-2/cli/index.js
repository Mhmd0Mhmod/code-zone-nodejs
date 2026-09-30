import { Command } from "commander";
import fs from "fs";
import inquirer from "inquirer";
const program = new Command();
const filePath = "./data.json";
const SaveQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the name of the object:",
  },
  {
    type: "input",
    name: "age",
    message: "Enter the age of the object:",
  },
  {
    type: "input",
    name: "object",
    message: "Enter the object data (in JSON format):",
  },
];
program
  .name("cli-save-objects-data")
  .description("A simple CLI application")
  .version("1.0.0");

program
  .command("save")
  .description("Save an object to a JSON file")
  .action(() => {
    inquirer.prompt(SaveQuestions).then((data) => {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(fileData);
        jsonData.push(data);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
      } else {
        fs.writeFileSync(filePath, JSON.stringify([data], null, 2), "utf-8");
      }
    });
  });

program.parse();

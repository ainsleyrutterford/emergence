// @ts-check

import { Octokit } from "@octokit/core";
import { execSync } from "child_process";
import fs from "fs";

const error = (message) => {
  console.error(message);
  process.exit(0);
};

const getCodeFromFile = (file) => {
  try {
    const code = fs.readFileSync(file, "utf8");
    return code.toString();
  } catch (e) {
    error(`Error trying to read file ${file}: ${e}`);
  }
};

const getHtmlFromGitHub = async (code, language) => {
  try {
    const octokit = new Octokit();
    const response = await octokit.request("POST /markdown", {
      text: "```" + language + "\n" + code,
    });
    return response.data;
  } catch (e) {
    error(`Error getting HTML from GitHub: ${error}`);
  }
};

// https://www.codegrepper.com/code-examples/javascript/js+escape+all+special+characters
const escapeAll = (string) =>
  string.replace(/[."`'*+?^${}()|[\]\\]/g, "\\$&").replace(/\n/g, "\\n");

const writeToFile = (file, code, html) => {
  const contents = `export const code = "${escapeAll(code)}";\n
  export const html = "${escapeAll(html)}";`;

  try {
    fs.writeFileSync(file, contents);
  } catch (e) {
    error(`Error writing to file ${file}: ${e}`);
  }
};

const lintOutputFile = (file) => {
  try {
    execSync(`npx eslint ${file} --fix`);
  } catch (e) {
    error(`Error linting output file ${file}: ${e}`);
  }
};

const main = async () => {
  const [, , language, inputFile, outputFile] = process.argv;

  if (!language || !inputFile || !outputFile) {
    error(
      "Incorrect arguments. Usage: npm run generate <language> <inputFile> <outputFile>"
    );
  }

  const code = getCodeFromFile(inputFile);
  const html = await getHtmlFromGitHub(code, language);

  writeToFile(outputFile, code, html);
  lintOutputFile(outputFile);
};

main();

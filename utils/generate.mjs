import { Octokit } from "@octokit/core";
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

const writeToFile = (file, code, html) => {
  const contents = `${code} ${html}`;

  try {
    fs.writeFileSync(file, contents);
  } catch (e) {
    error(`Error writing to file ${file}: ${e}`);
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
};

main();

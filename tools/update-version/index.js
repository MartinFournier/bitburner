// import { Octokit } from "@octokit/rest";
import commandLineArgs from "command-line-args";

import fs from 'fs/promises';
import { readFileSync } from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
const owner = "danielyxie";
const repo = "bitburner"
const basePath = `https://github.com/${owner}/${repo}`;

// https://github.com/75lb/command-line-args
const optionDefinitions = [
  { name: 'version', alias: 'v', type: String, required: true },
  { name: 'versionNumber', alias: 'n', type: Number },
  { name: 'versionDescription', alias: 'd', type: String },
  { name: 'changelog', alias: 'l', type: String },
];

const cliArgs = commandLineArgs(optionDefinitions);

const appPaths = {};
appPaths.root = path.join(path.dirname(fileURLToPath(import.meta.url)), "../..");
appPaths.mainPackage = path.join(appPaths.root, "./package.json");
appPaths.electronPackage = path.join(appPaths.root, "./electron/package.json");
appPaths.constants = path.join(appPaths.root, "./src/Constants.ts");
appPaths.sphinxConf = path.join(appPaths.root, "./doc/source/conf.py");
appPaths.sphinxChangelog = path.join(appPaths.root, "./doc/source/changelog.rst");

async function main(version, versionNumber, changelog) {
  // const sphinxConf = await fs.readFile(appPaths.sphinxConf, 'utf8');
  // const sphinxChangelog = await fs.readFile(appPaths.sphinxChangelog, 'utf8');


  const [ major, minor ]= version.split('.');
  const shortVersion = `${major}.${minor}`;
  const modifiedMainPackage = (await fs.readFile(appPaths.mainPackage, 'utf8')).
    replace(/(^\s*"version":\s)"(.*)",$/m, `$1"${version}",`);
  await fs.writeFile(appPaths.mainPackage, modifiedMainPackage);

  const modifiedElectronPackage = (await fs.readFile(appPaths.electronPackage, 'utf8')).
    replace(/(^\s*"version":\s)"(.*)",$/m, `$1"${version}",`);
  await fs.writeFile(appPaths.electronPackage, modifiedElectronPackage);

  let modifiedConstants = (await fs.readFile(appPaths.constants, 'utf8')).
    replace(/(^\s*?VersionString:\s)"(.*)",/m, `$1"${version}",`);
  modifiedConstants = modifiedConstants.
    replace(/(^\s*?VersionNumber:\s)(.*),/m, `$1${versionNumber},`);

  if (changelog.trim() !== '') {
    const paddedChangelog = changelog.split('\n').
      map((line) => (line.trim() !== '' ? '    ' + line : '')).
      join('\n').
      replace('/');

    modifiedConstants = modifiedConstants.
      replace(/(^\s*?LatestUpdate:\s`\n)(.*)`,$/ms, `$1${paddedChangelog}\n` + "`,");
  }
  await fs.writeFile(appPaths.constants, modifiedConstants);

  let modifiedSphinxConfig = (await fs.readFile(appPaths.sphinxConf, 'utf8')).
    replace(/(^version = ')(.*)'$/m, `$1${shortVersion}'`);
  modifiedSphinxConfig = modifiedSphinxConfig.
    replace(/(^release = ')(.*)'$/m, `$1${version}'`);
  await fs.writeFile(appPaths.sphinxConf, modifiedSphinxConfig);

  if (changelog.trim() !== '') {
    let modifiedSphinxChangelog = await fs.readFile(appPaths.sphinxChangelog, 'utf8');
    const lines = modifiedSphinxChangelog.split('\n');
    lines.splice(5, 0, changelog);
    modifiedSphinxChangelog = lines.join('\n');
    await fs.writeFile(appPaths.sphinxChangelog, modifiedSphinxChangelog);
  }
}

async function getChangelog() {
  // Read from stdin
  // https://stackoverflow.com/a/56012724
  try {
    return readFileSync(0, 'utf-8').replace('\r\n', '\n');
  } catch (error) {
    return '';
  }
}

getChangelog().then((changes) => {
  main(cliArgs.version, cliArgs.versionNumber, changes);
})


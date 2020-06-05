import * as ts from "typescript";
// ______________________________________________________
//
const createConfigFileHost = (): ts.ParseConfigFileHost => ({
  useCaseSensitiveFileNames: false,
  readDirectory: ts.sys.readDirectory,
  fileExists: ts.sys.fileExists,
  readFile: ts.sys.readFile,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  onUnRecoverableConfigFileDiagnostic(diagnostic: ts.Diagnostic) {
    throw new Error(
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
    );
  },
});

export function createProgram(
  searchPath: string,
  configName = "tsconfig.json"
) {
  // 調べる対象になるプロジェクトディレクトリから tsconfig を探す
  const configPath = ts.findConfigFile(
    searchPath,
    ts.sys.fileExists,
    configName
  );
  if (!configPath) {
    throw new Error("Could not find 'tsconfig.json'.");
  }
  // 見つけた tsconfig を元に
  // ts.ParsedCommandLine を取得
  const parsedCommandLine = ts.getParsedCommandLineOfConfigFile(
    configPath,
    {},
    createConfigFileHost()
  );
  if (!parsedCommandLine) {
    throw new Error("invalid parsedCommandLine.");
  }
  if (parsedCommandLine.errors.length) {
    throw new Error("parsedCommandLine has errors.");
  }
  // ts.Program を作成
  return ts.createProgram({
    rootNames: parsedCommandLine.fileNames,
    options: parsedCommandLine.options,
  });
}

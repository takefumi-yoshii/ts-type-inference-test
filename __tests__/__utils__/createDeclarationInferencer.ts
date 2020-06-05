import { createProgram } from "./createProgram";
import { getInferredTypeStringByDeclarationName } from "./traverser";
import { resolve } from "path";
// ______________________________________________________
//
export function createDeclarationInferencer(
  srcFileName: string,
  tsconfigPath = "tsconfig.json"
) {
  const program = createProgram(resolve(tsconfigPath));
  const checker = program.getTypeChecker();
  const src = program.getSourceFile(resolve(srcFileName));
  return (declarationName: string) => {
    if (!src) throw new Error("invalid src");
    return getInferredTypeStringByDeclarationName(
      checker,
      src,
      declarationName
    );
  };
}

import * as ts from "typescript";
// ______________________________________________________
//
export function getInferredTypeStringByDeclarationName(
  checker: ts.TypeChecker,
  source: ts.SourceFile,
  declarationName: string
) {
  let res: string | undefined;
  function visit(node: ts.Node) {
    switch (node.kind) {
      case ts.SyntaxKind.VariableDeclaration:
        const name = node.getChildAt(0).getText();
        if (name === declarationName) {
          const type = checker.getTypeAtLocation(node);
          res = checker.typeToString(type);
        }
        break;
    }
    if (res) return;
    ts.forEachChild(node, visit);
  }
  visit(source);
  return res;
}

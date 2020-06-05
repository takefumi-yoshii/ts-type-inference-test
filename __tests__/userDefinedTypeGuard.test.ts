import { createDeclarationInferencer } from "./__utils__/createDeclarationInferencer";
// ______________________________________________________
//
describe("userDefinedTypeGuard.ts", () => {
  const srcFileName = `__tests__/userDefinedTypeGuard.ts`;
  const infer = createDeclarationInferencer(srcFileName);

  test("trueth", () => {
    expect(infer("res1")).toBe("(number | null | undefined)[]");
    expect(infer("res2")).toBe("(number | null)[]");
    expect(infer("res3")).toBe("number[]");
  });
});

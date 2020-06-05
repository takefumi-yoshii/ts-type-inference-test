import { createDeclarationInferencer } from "./__utils__/createDeclarationInferencer";
// ______________________________________________________
//
describe("widening.ts", () => {
  const srcFileName = `__tests__/widening.ts`;
  const infer = createDeclarationInferencer(srcFileName);

  test("Widening Literal Type looks like as literal.", () => {
    expect(infer("w0")).toBe("0");
    expect(infer("n1")).toBe("1");
    expect(infer("n2")).toBe("2");
  });

  test("Widening Literal Type go unnoticed until used.", () => {
    expect(infer("test0")).toBe("number");
    expect(infer("test1")).toBe("1");
    expect(infer("test2")).toBe("2");
  });
});

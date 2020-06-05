import { getInspector } from "./__helpers__/getInspector";
// ______________________________________________________
//
describe("userDefinedTypeGuard.ts", () => {
  const srcFileName = `__tests__/userDefinedTypeGuard.ts`;
  const inspect = getInspector(srcFileName);

  test("trueth", () => {
    expect(inspect("res1")).toBe("(number | null | undefined)[]");
    expect(inspect("res2")).toBe("(number | null)[]");
    expect(inspect("res3")).toBe("number[]");
  });
});

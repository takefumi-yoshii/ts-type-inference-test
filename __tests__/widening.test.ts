import { getInspector } from "./__helpers__/getInspector";
// ______________________________________________________
//
describe("widening.ts", () => {
  const srcFileName = `__tests__/widening.ts`;
  const inspect = getInspector(srcFileName);

  test("Widening Literal Type looks like as literal.", () => {
    expect(inspect("w0")).toBe("0");
    expect(inspect("n1")).toBe("1");
    expect(inspect("n2")).toBe("2");
  });

  test("Widening Literal Type go unnoticed until used.", () => {
    expect(inspect("test0")).toBe("number");
    expect(inspect("test1")).toBe("1");
    expect(inspect("test2")).toBe("2");
  });
});

# ts-type-inference-test

This is a sample that unit tests the type inference itself.
Although TypeScript's type system is expressive, it is programmable and may require testing.
Such TDD flow is useful for providing esoteric reasoning.

### How it works

It uses the CompilerAPI provided by TypeScript.
This allows Node.js to know what type is comming the TypeScript compiler is inferring.
Here, testing framework uses jest, but you can choose it freely.

If you have mouse over a variable in VS Code, you can see inferred type.
The function prepared here is a function that shows just that to Node.js.
Below function `infer` is tell that to Node.js.

```typescript
const w0 = 0;
```

```typescript
const infer = createDeclarationInferencer(srcFileName);
test("Widening Literal Type looks like as literal.", () => {
  expect(infer("w0")).toBe("0");
});
```

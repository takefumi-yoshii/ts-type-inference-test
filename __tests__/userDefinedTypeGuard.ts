function removeUndefined1<T>(args: T) {
  return args !== undefined;
}
function removeUndefined2<T>(args: T): args is Exclude<T, undefined> {
  return args !== undefined;
}
function removeUndefined3<T>(args: T): args is NonNullable<T> {
  return args !== undefined;
}

const arr = [1, 2, 3, undefined, null];

const res1 = arr.filter(removeUndefined1);
const res2 = arr.filter(removeUndefined2);
const res3 = arr.filter(removeUndefined3);

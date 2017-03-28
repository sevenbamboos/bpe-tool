let typeCache: { [label: string]: boolean } = {};

export function type<T extends string>(label: T): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

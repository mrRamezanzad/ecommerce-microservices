interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(valueObject?: ValueObject<T>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }
    if (valueObject.props === undefined) {
      return false;
    }
    return shallowEqual(this.props, valueObject.props);
  }
}

function shallowEqual<T extends ValueObjectProps>(
  origin: T,
  target: T,
): boolean {
  const hasEqualLength =
    Object.keys(origin).length === Object.keys(target).length;

  if (!hasEqualLength) return false;

  const hasSameProperties = (
    Object.keys(origin) as (keyof typeof origin)[]
  ).every((key) => {
    return (
      Object.prototype.hasOwnProperty.call(target, key) &&
      origin[key] === target[key]
    );
  });

  return hasSameProperties;
}

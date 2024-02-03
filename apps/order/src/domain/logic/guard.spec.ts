import { Guard, IGuardArgument, IGuardResult } from './guard';

describe('Guard', () => {
  it('should have required methods', () => {
    expect(Guard.againstNullOrUndefined).toBeDefined();
    expect(Guard.againstNullOrUndefinedBulk).toBeDefined();
    expect(Guard.isOneOf).toBeDefined();
    expect(Guard.inRange).toBeDefined();
    expect(Guard.allInRange).toBeDefined();
    expect(Guard.combine).toBeDefined();
  });

  it('method againstNullOrUndefined should return correct result in case of null, undefined or text arguments', () => {
    let result: IGuardResult;
    let nullInput = null;
    let undefinedInput = undefined;
    let stringInput = 'test';

    result = Guard.againstNullOrUndefined(nullInput, 'test');
    expect(result).toBeDefined();
    expect(result.succeeded).toBeFalsy();
    expect(result.message.includes('null')).toBeTruthy();

    result = Guard.againstNullOrUndefined(undefinedInput, 'test');
    expect(result).toBeDefined();
    expect(result.succeeded).toBeFalsy();
    expect(result.message.includes('undefined')).toBeTruthy();

    result = Guard.againstNullOrUndefined(stringInput, 'test');
    expect(result).toBeDefined();
    expect(result.succeeded).toBeTruthy();
    expect(result.message).toBeUndefined();
  });

  it('method againstNullOrUndefinedBulk should return correct result in case of null, undefined or text arguments', () => {
    let result: IGuardResult;
    let guardArguments: IGuardArgument[] = [
      {
        argument: 'test',
        argumentName: 'string argument',
      },
      {
        argument: null,
        argumentName: 'null argument',
      },
      {
        argument: undefined,
        argumentName: 'undefined argument',
      },
    ];

    result = Guard.againstNullOrUndefinedBulk(guardArguments);

    expect(result).toBeDefined();
    expect(result.succeeded).toBeFalsy();
    expect(result.message.includes('null')).toBeTruthy();
  });

  it('method isOneOf must return correct when the argument is included and not included', () => {
    const includedValue = 10;
    const notIncludedValue = 100;
    const validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const argumentName = 'number in range';

    let result = Guard.isOneOf(includedValue, validValues, argumentName);

    expect(result.succeeded).toBeTruthy();
    expect(result.message).toBeUndefined();

    result = Guard.isOneOf(notIncludedValue, validValues, argumentName);

    expect(result.succeeded).toBeFalsy();
    expect(result.message).toBeDefined();
  });

  it('method inRange must return correct value while argument is and is not in range', () => {
    const inRangeNumber = 5;
    const notInRangeNumber = 50;
    const min = 1;
    const max = 10;
    const argumentName = 'in Range number';

    let result = Guard.inRange(inRangeNumber, min, max, argumentName);

    expect(result.succeeded).toBeTruthy();
    expect(result.message).toBeUndefined();

    result = Guard.inRange(notInRangeNumber, min, max, argumentName);

    expect(result.succeeded).toBeFalsy();
    expect(result.message).toBeDefined();
  });

  it('method allInRange must return correct value while argument is and is not in range', () => {
    const numbers = [5, 10, 15, 3, 45];
    const min = 1;
    const max = 10;
    const argumentName = 'in Range number';

    let result = Guard.allInRange(numbers, min, max, argumentName);

    expect(result.succeeded).toBeFalsy();
    expect(result.message).toBeDefined();
  });

  it('method combine must return correct value when one of results is not success', () => {
    const mockResults: IGuardResult[] = [
      { succeeded: true },
      {
        succeeded: false,
        message: 'this one has error',
      },
      { succeeded: true },
    ];

    const combinedResult = Guard.combine(mockResults);

    expect(combinedResult.succeeded).toBeFalsy();
    expect(combinedResult.message).toBeDefined();
  });
});

export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export class Guard {
  public static againstNullOrUndefined(
    argument: any,
    argumentName: string,
  ): IGuardResult {
    if (argument === null || argument === undefined) {
      return {
        succeeded: false,
        message: `${argumentName} is null or undefined.`,
      };
    }
    return { succeeded: true };
  }

  public static againstNullOrUndefinedBulk(
    args: IGuardArgument[],
  ): IGuardResult {
    for (const arg of args) {
      const result = this.againstNullOrUndefined(
        arg.argumentName,
        arg.argument,
      );

      if (!result.succeeded) {
        return result;
      }
    }

    return { succeeded: true };
  }

  public static isOneOf(
    value: any,
    validValues: any[],
    argumentName: string,
  ): IGuardResult {
    const isInValidValues = validValues.includes(value);

    if (!isInValidValues) {
      return {
        succeeded: false,
        message: `${argumentName} is'nt one of the correct types in ${JSON.stringify(
          validValues,
        )}.Got
          ${value} `,
      };
    }

    return { succeeded: true };
  }

  public static inRange(
    number: number,
    min: number,
    max: number,
    argumentName: string,
  ): IGuardResult {
    const isInRange = number >= min && number >= max;

    if (!isInRange) {
      return {
        succeeded: false,
        message: `${argumentName} is not within range ${min} to ${max}.`,
      };
    }

    return { succeeded: true };
  }

  public static allInRange(
    numbers: number[],
    min: number,
    max: number,
    argumentName: string,
  ): IGuardResult {
    for (const number of numbers) {
      const isInRangeResult = this.inRange(number, min, max, argumentName);

      if (!isInRangeResult.succeeded) {
        return isInRangeResult;
      }
    }

    return { succeeded: true };
  }

  public static combine(guardResults: IGuardResult[]): IGuardResult {
    for (const guardResult of guardResults) {
      if (!guardResult.succeeded) {
        return guardResult;
      }
    }

    return { succeeded: true };
  }
}

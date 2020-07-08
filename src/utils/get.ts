'use strict';

export interface Subfunctions {
	before: (identifier: string | RegExp) => string | undefined;
	after: (identifier: string | RegExp) => string | undefined;
	between: (firstIdentifier: string | RegExp, secondIdentifier: string | RegExp) => string | undefined;
}

export const get = (expression: string): Subfunctions => {
	return {
		before: identifier => expression.split(identifier)[0],
		after: identifier => expression.split(identifier).pop(),
		between: (firstIdentifier, secondIdentifier) => (expression.split(firstIdentifier).pop() as string).split(secondIdentifier)[0]
	};
};

'use strict';

import {get} from './get';

interface Subfunctions {
	before: (identifier: string | RegExp, replaceWith: string) => string | undefined;
	after: (identifier: string | RegExp, replaceWith: string) => string | undefined;
	between: (firstIdentifier: string | RegExp, secondIdentifier: string | RegExp, replaceWith: string) => string | undefined;
}

export const replace = (expression: string): Subfunctions => {
	return {
		before: (identifier, replaceWith) => expression.replace(get(expression).before(identifier) as string, replaceWith),
		after: (identifier, replaceWith) => expression.replace(get(expression).after(identifier) as string, replaceWith),
		between: (firstIdentifier, secondIdentifier, replaceWith) => expression.replace(get(expression).between(firstIdentifier, secondIdentifier) as string, replaceWith)
	};
};

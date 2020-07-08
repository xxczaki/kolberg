'use strict';

import {get, Subfunctions} from './get';

export const remove = (expression: string): Subfunctions => {
	return {
		before: identifier => get(expression).after(identifier),
		after: identifier => get(expression).before(identifier),
		between: (firstIdentifier, secondIdentifier) => expression.replace(get(expression).between(firstIdentifier, secondIdentifier) as string, '')
	};
};

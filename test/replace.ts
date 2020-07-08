import test from 'ava';

import {replace} from '../src';

test('after', t => {
	t.is(replace('hello, world!').after(',', ' Mark!'), 'hello, Mark!');
	t.is(replace('What A Wonderful World').after(/wonderful /i, 'View'), 'What A Wonderful View');
});

test('before', t => {
	t.is(replace('hello, world!').before(',', 'hi'), 'hi, world!');
	t.is(replace('What A Wonderful World').before(/ world/i, 'Beautiful'), 'Beautiful World');
});

test('between', t => {
	t.is(replace('brown fox jumps over the lazy dog').between('the ', ' dog', 'quick'), 'brown fox jumps over the quick dog');
	t.is(replace('What A Wonderful World').between(/ a /i, / world/i, 'Surprising'), 'What A Surprising World');
});

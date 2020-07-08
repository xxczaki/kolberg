import test from 'ava';

import {get} from '../src';

test('after', t => {
	t.is(get('hello, world!').after(','), ' world!');
	t.is(get('What A Wonderful World').after(/ a /i), 'Wonderful World');
});

test('before', t => {
	t.is(get('hello, world!').before(','), 'hello');
	t.is(get('What A Wonderful World').before(/ a /i), 'What');
});

test('between', t => {
	t.is(get('brown fox jumps over the lazy dog').between('the', 'dog')?.trim(), 'lazy');
	t.is(get('What A Wonderful World').between(/ a /i, /world/i)?.trim(), 'Wonderful');
});

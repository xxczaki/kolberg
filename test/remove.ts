import test from 'ava';

import {remove} from '../src';

test('after', t => {
	t.is(remove('hello, world!').after(','), 'hello');
	t.is(remove('What A Wonderful World').after(/ a /i), 'What');
});

test('before', t => {
	t.is(remove('hello, world!').before(','), ' world!');
	t.is(remove('What A Wonderful World').before(/ a /i), 'Wonderful World');
});

test('between', t => {
	t.is(remove('brown fox jumps over the lazy dog').between('the', ' dog'), 'brown fox jumps over the dog');
	t.is(remove('What A Wonderful World').between(/ a /i, /world/i), 'What A World');
});

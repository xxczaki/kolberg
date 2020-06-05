import test from 'ava';
import parsifyMathPlugin from '@parsify/math';

import Parsify from './src';

test('with plugins', async t => {
	const parsify = new Parsify([
		parsifyMathPlugin()
	]);

	t.is(await parsify.parse('1+2'), '3');
});

test('comments', async t => {
	const parsify = new Parsify();

	t.is(await parsify.parse('# Example comment'), '');
	t.is(await parsify.parse('//Example comment'), '');
	t.is(await parsify.parse('2+2 // Quick maths'), '2+2');
});

test('labels', async t => {
	const parsify = new Parsify();

	t.is(await parsify.parse('Result: 10+2'), '10+2');
});

test('without plugins', async t => {
	const parsify = new Parsify();

	t.is(await parsify.parse('1+2'), '1+2');
});

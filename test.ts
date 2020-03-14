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

	t.is(await parsify.parse('# Example comment'), 'comment');
	t.is(await parsify.parse('//Example comment'), 'comment');
});

test('labels', async t => {
	const parsify = new Parsify();

	t.is(await parsify.parse('Price: 10 usd to pln'), '10 usd to pln');
});

test('without plugins', async t => {
	const parsify = new Parsify();

	t.is(await parsify.parse('1+2'), '1+2');
});

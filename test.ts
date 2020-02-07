import test from 'ava';
import parsifyMathPlugin from '@parsify/math';
import parsifyCurrenciesPlugin from '@parsify/currencies';

import Parsify from './src';

test('with plugins', async t => {
    const parsify = new Parsify([
        parsifyMathPlugin(),
        parsifyCurrenciesPlugin()
    ]);

    t.is(await parsify.parse('1+2'), 3);
    t.regex(await parsify.parse('10 usd to pln'), /PLN/);
});

test('comments', async t => {
    const parsify = new Parsify();

    t.is(await parsify.parse('# Example comment'), undefined);
    t.is(await parsify.parse('//Example comment'), undefined);
});

test('without plugins', async t => {
    const parsify = new Parsify();

    t.is(await parsify.parse('1+2'), '1+2');
});
import pPipe from 'p-pipe';

export default class Parsify {
	constructor(private readonly plugins?: ReadonlyArray<(expression: string) => Promise<any>>) { }

	/**
	* @param expression Expression you want to parse
	* @return Parsing result
	*/
	async parse(expression: string): Promise<any> {
		// Remove labels (words, that end with `:`) and comments
		expression = expression.replace(/((\/{2}|#).*)/, '').trim();
		expression = expression.replace(/.*:/, '').trim();

		// Pipe the expression through plugins
		if (this.plugins && (this.plugins).length > 0) {
			return pPipe(...this.plugins)(expression);
		}

		return expression;
	}
}

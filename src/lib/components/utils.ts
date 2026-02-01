export function checkForSpecialChar(letter: string){
	if (!isNaN(parseInt(letter))) {
		return `N${letter}`;
	}
	if (letter === '!') {
		return 'Bang'
	}
	if (letter === '\'') {
		return 'QuoteSingle';
	}
	if (letter === '"') {
		return 'QuoteDouble';
	}
	return letter;
}
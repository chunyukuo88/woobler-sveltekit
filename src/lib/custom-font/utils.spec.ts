import { processWordForGlyphs } from './utils';
import { describe, expect, it } from 'vitest';

describe('GIVEN: ', () => {
	describe('WHEN: it is a normal word', () => {
		it('THEN: returns the word as an array of uppercase letters', () => {
			const word = 'album';
			const expectedResult = ['A', 'L', 'B', 'U', 'M'];

			const result = processWordForGlyphs(word);

			expect(result).toEqual(expectedResult);
		});
	});
});
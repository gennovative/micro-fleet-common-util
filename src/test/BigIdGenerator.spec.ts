import * as chai from 'chai';
import * as spies from 'chai-spies';
import { Int64BE } from 'int64-buffer';

import { BigIdGenerator } from '../app';


chai.use(spies);
const expect = chai.expect;

describe('BigId', () => {
	describe('next', () => {
		it('Should generate different numbers on each call', () => {
			let idGen = new BigIdGenerator();
			expect (idGen.next()).not.to.equal(idGen.next());
		});
	}); // END describe 'next'

	describe('wrap', () => {
		it('Should call next() internally if no argument is given.', () => {
			// Arrange
			let idGen = new BigIdGenerator(),
				nextSpy = chai.spy.on(idGen, 'next');

			// Act
			idGen.wrap();

			// Assert
			expect(nextSpy).to.be.called.once;
		});

		it('Should wrap the input.', () => {
			// Arrange
			let idGen = new BigIdGenerator(),
				input = '12345';

			// Act
			let bigId = idGen.wrap(input);
			let another = new Int64BE(input);

			// Assert
			expect(bigId.toNumber()).to.equal(parseInt(input));
		});
	}); // END describe 'wrap'
});
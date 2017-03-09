import { expect } from 'chai';
import { Guard, InvalidArgumentException, CriticalException, MinorException } from '../app';

describe('Guard', () => {

	describe('assertDefined', () => {
		it('should do nothing if argument is defined', () => {
			// Arrange
			let arg_1st = 0,
				arg_2nd = {},
				arg_3rd = [],
				ex_1st, ex_2nd, ex_3rd;
			
			// Act
			try {
				Guard.assertDefined('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}
			
			try {
				Guard.assertDefined('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertDefined('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st).to.be.undefined;
			expect(ex_2nd).to.be.undefined;
			expect(ex_3rd).to.be.undefined;
		});

		it('should throw exception if argument is null or undefined', () => {
			// Arrange
			let arg_1st = null,
				arg_2nd = undefined,
				arg_3rd, ex_1st, ex_2nd, ex_3rd;

			// Act
			try {
				Guard.assertDefined('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertDefined('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertDefined('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st).to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_2nd).to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_3rd).to.be.an.instanceOf(InvalidArgumentException);
		});
	}); // describe 'assertDefined'

	describe('assertNotEmpty', () => {
		it('should do nothing if argument is not empty', () => {
			// Arrange
			let arg_1st = 'fee',
				arg_2nd = {
					prop: 'blah'
				},
				arg_3rd = [1, 'foo', 3],
				ex_1st, ex_2nd, ex_3rd;

			// Act
			try {
				Guard.assertNotEmpty('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertNotEmpty('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}

			try {
				Guard.assertNotEmpty('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.undefined;
			expect(ex_2nd, 'Exception 2').to.be.undefined;
			expect(ex_3rd, 'Exception 3').to.be.undefined;
		});

		it('should throw exception if argument is empty', () => {
			// Arrange
			let arg_1st = null,
				arg_2nd = undefined,
				arg_3rd = {},
				arg_4th = [],
				arg_5th = '',
				arg_6th = 99,
				arg_7th, ex_1st, ex_2nd, ex_3rd, ex_4th, ex_5th, ex_6th, ex_7th;

			// Act
			try {
				Guard.assertNotEmpty('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertNotEmpty('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertNotEmpty('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			try {
				Guard.assertNotEmpty('ex_4th', arg_4th);
			} catch (ex) {
				ex_4th = ex;
			}

			try {
				Guard.assertNotEmpty('ex_5th', arg_5th);
			} catch (ex) {
				ex_5th = ex;
			}

			try {
				Guard.assertNotEmpty('ex_6th', arg_6th);
			} catch (ex) {
				ex_6th = ex;
			}

			try {
				Guard.assertNotEmpty('ex_7th', arg_7th);
			} catch (ex) {
				ex_7th = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_2nd, 'Exception 2').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_3rd, 'Exception 3').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_4th, 'Exception 4').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_5th, 'Exception 5').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_6th, 'Exception 6').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_7th, 'Exception 7').to.be.an.instanceOf(InvalidArgumentException);
		});
	}); // describe 'assertNotEmpty'

	describe('assertIsFunction', () => {
		it('should do nothing if argument is a function', () => {
			// Arrange
			let arg_1st = () => {},
				arg_2nd = new Function(''),
				arg_3rd = function() { },
				ex_1st, ex_2nd, ex_3rd;

			// Act
			try {
				Guard.assertIsFunction('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsFunction('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}

			try {
				Guard.assertIsFunction('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.undefined;
			expect(ex_2nd, 'Exception 2').to.be.undefined;
			expect(ex_3rd, 'Exception 3').to.be.undefined;
		});

		it('should throw exception if argument is not a function', () => {
			// Arrange
			let arg_1st = null,
				arg_2nd = undefined,
				arg_3rd = {},
				arg_4th = [],
				arg_5th = '',
				arg_6th = 99,
				arg_7th, ex_1st, ex_2nd, ex_3rd, ex_4th, ex_5th, ex_6th, ex_7th;

			// Act
			try {
				Guard.assertIsFunction('arg_1st', arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsFunction('arg_2nd', arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertIsFunction('arg_3rd', arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			try {
				Guard.assertIsFunction('ex_4th', arg_4th);
			} catch (ex) {
				ex_4th = ex;
			}

			try {
				Guard.assertIsFunction('ex_5th', arg_5th);
			} catch (ex) {
				ex_5th = ex;
			}

			try {
				Guard.assertIsFunction('ex_6th', arg_6th);
			} catch (ex) {
				ex_6th = ex;
			}

			try {
				Guard.assertIsFunction('ex_7th', arg_7th);
			} catch (ex) {
				ex_7th = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_2nd, 'Exception 2').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_3rd, 'Exception 3').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_4th, 'Exception 4').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_5th, 'Exception 5').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_6th, 'Exception 6').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_7th, 'Exception 7').to.be.an.instanceOf(InvalidArgumentException);
		});
	}); // describe 'assertIsFunction'

	describe('assertIsMatch', () => {
		it('should do nothing if argument matches rule', () => {
			// Arrange
			const rule = /^ab[a-z]+de$/;
			let arg_1st = 'abcde',
				ex_1st;

			// Act
			try {
				Guard.assertIsMatch('arg_1st', rule, arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.undefined;
		});

		it('should throw exception if argument does not match rule', () => {
			// Arrange
			const rule = /^ab[a-z]+de$/;
			let arg_1st = '',
				arg_2nd = 'abde',
				arg_3rd = 'ab9de',
				arg_4th = 'ab-de',
				ex_1st, ex_2nd, ex_3rd, ex_4th;

			// Act
			try {
				Guard.assertIsMatch('arg_1st', rule, arg_1st);
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsMatch('arg_2nd', rule, arg_2nd);
			} catch (ex) {
				ex_2nd = ex;
			}

			try {
				Guard.assertIsMatch('arg_3rd', rule, arg_3rd);
			} catch (ex) {
				ex_3rd = ex;
			}

			try {
				Guard.assertIsMatch('arg_4th', rule, arg_4th);
			} catch (ex) {
				ex_4th = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_2nd, 'Exception 2').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_3rd, 'Exception 3').to.be.an.instanceOf(InvalidArgumentException);
			expect(ex_4th, 'Exception 4').to.be.an.instanceOf(InvalidArgumentException);
		});
	}); // describe 'assertIsMatch'

	describe('assertIsTruthy', () => {
		it('should do nothing if argument is truthy', () => {
			// Arrange
			let arg_1st = true,
				arg_2nd = {},
				arg_3rd = 'a',
				ex_1st, ex_2nd, ex_3rd;

			// Act
			try {
				Guard.assertIsTruthy(arg_1st, 'Arg 1');
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsTruthy(arg_2nd, 'Arg 2');
			} catch (ex) {
				ex_2nd = ex;
			}

			try {
				Guard.assertIsTruthy(arg_3rd, 'Arg 3');
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.undefined;
			expect(ex_2nd, 'Exception 2').to.be.undefined;
			expect(ex_3rd, 'Exception 3').to.be.undefined;
		});

		it('should throw exception if argument is not truthy', () => {
			// Arrange
			let arg_1st = null,
				arg_2nd = undefined,
				arg_3rd = 0,
				arg_4th = false,
				arg_5th = NaN,
				arg_6th = '',
				arg_7th, ex_1st, ex_2nd, ex_3rd, ex_4th, ex_5th, ex_6th, ex_7th;

			// Act
			try {
				Guard.assertIsTruthy(arg_1st, 'Arg 1');
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsTruthy(arg_2nd, 'Arg 2');
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertIsTruthy(arg_3rd, 'Arg 3');
			} catch (ex) {
				ex_3rd = ex;
			}

			try {
				Guard.assertIsTruthy(arg_4th, 'Arg 4', false);
			} catch (ex) {
				ex_4th = ex;
			}

			try {
				Guard.assertIsTruthy(arg_5th, 'Arg 5', false);
			} catch (ex) {
				ex_5th = ex;
			}

			try {
				Guard.assertIsTruthy(arg_6th, 'Arg 6', false);
			} catch (ex) {
				ex_6th = ex;
			}

			try {
				Guard.assertIsTruthy(arg_7th, 'Arg 7', false);
			} catch (ex) {
				ex_7th = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.an.instanceOf(CriticalException);
			expect(ex_2nd, 'Exception 2').to.be.an.instanceOf(CriticalException);
			expect(ex_3rd, 'Exception 3').to.be.an.instanceOf(CriticalException);
			expect(ex_4th, 'Exception 4').to.be.an.instanceOf(MinorException);
			expect(ex_5th, 'Exception 5').to.be.an.instanceOf(MinorException);
			expect(ex_6th, 'Exception 6').to.be.an.instanceOf(MinorException);
			expect(ex_7th, 'Exception 7').to.be.an.instanceOf(MinorException);
		});
	}); // describe 'assertIsTruthy'

	describe('assertIsFalsey', () => {
		
		it('should do nothing if argument is falsey', () => {
			// Arrange
			let arg_1st = null,
				arg_2nd = undefined,
				arg_3rd = 0,
				arg_4th = false,
				arg_5th = NaN,
				arg_6th = '',
				arg_7th, ex_1st, ex_2nd, ex_3rd, ex_4th, ex_5th, ex_6th, ex_7th;

			// Act
			try {
				Guard.assertIsFalsey(arg_1st, 'Arg 1');
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsFalsey(arg_2nd, 'Arg 2');
			} catch (ex) {
				ex_2nd = ex;
			}
			
			try {
				Guard.assertIsFalsey(arg_3rd, 'Arg 3');
			} catch (ex) {
				ex_3rd = ex;
			}

			try {
				Guard.assertIsFalsey(arg_4th, 'Arg 4', false);
			} catch (ex) {
				ex_4th = ex;
			}

			try {
				Guard.assertIsFalsey(arg_5th, 'Arg 5', false);
			} catch (ex) {
				ex_5th = ex;
			}

			try {
				Guard.assertIsFalsey(arg_6th, 'Arg 6', false);
			} catch (ex) {
				ex_6th = ex;
			}

			try {
				Guard.assertIsFalsey(arg_7th, 'Arg 7', false);
			} catch (ex) {
				ex_7th = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.undefined;
			expect(ex_2nd, 'Exception 2').to.be.undefined;
			expect(ex_3rd, 'Exception 3').to.be.undefined;
			expect(ex_4th, 'Exception 4').to.be.undefined;
			expect(ex_5th, 'Exception 5').to.be.undefined;
			expect(ex_6th, 'Exception 6').to.be.undefined;
			expect(ex_7th, 'Exception 7').to.be.undefined;
		});

		it('should throw exception if argument is not falsey', () => {
			// Arrange
			let arg_1st = true,
				arg_2nd = {},
				arg_3rd = 'a',
				ex_1st, ex_2nd, ex_3rd;

			// Act
			try {
				Guard.assertIsFalsey(arg_1st, 'Arg 1');
			} catch (ex) {
				ex_1st = ex;
			}

			try {
				Guard.assertIsFalsey(arg_2nd, 'Arg 2');
			} catch (ex) {
				ex_2nd = ex;
			}

			try {
				Guard.assertIsFalsey(arg_3rd, 'Arg 3');
			} catch (ex) {
				ex_3rd = ex;
			}

			// Assert
			expect(ex_1st, 'Exception 1').to.be.an.instanceOf(CriticalException);
			expect(ex_2nd, 'Exception 2').to.be.an.instanceOf(CriticalException);
			expect(ex_3rd, 'Exception 3').to.be.an.instanceOf(CriticalException);
		});
	}); // describe 'assertIsFalsey'

});
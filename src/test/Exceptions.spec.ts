import { expect } from 'chai';


import * as app from '../app';

describe('Exception', () => {
	it('`name` getter and setter should work', () => {
		// Arrange
		const NAME = 'error';
		let ex = new app.Exception();

		// Act
		ex.name = NAME; // setter
		let myName = ex.name; // getter

		// Assert
		expect(myName).to.equal(NAME);
	});

	it('`stack` should have value right after exception is created.', () => {
		// Arrange
		let ex = new app.Exception();

		// Act
		let stack = ex.stack;

		// Assert
		expect(stack).not.to.be.undefined;
	});

	it('`message` getter should work.', () => {
		// Arrange
		const MSG = 'An error occurs';
		let ex = new app.Exception(MSG);

		// Act
		let message = ex.message;

		// Assert
		expect(message).not.to.be.undefined;
	});
	
	it('`isCritical` getter should work.', () => {
		// Arrange
		const MSG = 'An error occurs';
		let ex = new app.Exception(MSG, true);

		// Act
		let isCritical = ex.isCritical;

		// Assert
		expect(isCritical).to.be.true;
	});
	
	it('`toString` should work for critical exception.', () => {
		// Arrange
		const MSG = 'An error occurs';
		let ex = new app.Exception(MSG, true);

		// Act
		let myString = ex.toString();

		// Assert
		expect(myString).to.contain(`[Critical] ${MSG}`);
	});

	it('`toString` should work for minor exception.', () => {
		// Arrange
		const MSG = 'An error occurs';
		let ex = new app.Exception(MSG, false);

		// Act
		let myString = ex.toString();

		// Assert
		expect(myString).to.contain(`[Minor] ${MSG}`);
	});

	it('`toString` should work with empty message.', () => {
		// Arrange
		let ex = new app.Exception();

		// Act
		let myString = ex.toString();

		// Assert
		expect(myString).to.contain(`[Minor] `);
	});
}); // describe 'Exception'

describe('CriticalException', () => {
	it('new instance should have specified message.', () => {
		// Arrange
		const MSG = 'An error occurs';

		// Act
		let ex = new app.CriticalException(MSG);

		// Assert
		expect(ex.message).to.equal(MSG);
	});
}); // describe 'CriticalException'

describe('MinorException', () => {
	it('new instance should have specified message.', () => {
		// Arrange
		const MSG = 'An error occurs';

		// Act
		let ex = new app.MinorException(MSG);

		// Assert
		expect(ex.message).to.equal(MSG);
	});
}); // describe 'MinorException'

describe('InvalidArgumentException', () => {
	it('new instance should have specified message.', () => {
		// Arrange
		const MSG = 'An error occurs',
			ARG_NAME = 'age';

		// Act
		let ex = new app.InvalidArgumentException(ARG_NAME, MSG),
			message = ex.message;

		// Assert
		expect(message).to.equal(`The argument "${ARG_NAME}" is invalid! ${MSG}`);
	});
	
	it('new instance should work without specified message.', () => {
		// Arrange
		const MSG = 'An error occurs',
			ARG_NAME = 'age';

		// Act
		let ex = new app.InvalidArgumentException(ARG_NAME),
			message = ex.message;

		// Assert
		expect(message).to.equal(`The argument "${ARG_NAME}" is invalid! `);
	});
}); // describe 'InvalidArgumentException'

describe('NotImplementedException', () => {
	it('new instance should have specified message.', () => {
		// Arrange
		const MSG = 'This function is not supported (yet)!';

		// Act
		let ex = new app.NotImplementedException(MSG);

		// Assert
		expect(ex.message).to.equal(MSG);
	});
}); // describe 'NotImplementedException'
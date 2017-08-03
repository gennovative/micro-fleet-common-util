Error.stackTraceLimit = 20;

export class Exception implements Error {

	public stack: string;

	protected _name: string;

	/**
	 * 
	 * @param _message 
	 * @param _isCritical 
	 * @param exceptionClass {class} The exception class to exclude from stacktrace.
	 */
	constructor(protected _message?: string, protected _isCritical?: boolean, exceptionClass?: Function) {
		this.stack = '';
		this._name = '';
		Error.captureStackTrace(this, exceptionClass || Exception);
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get message(): string {
		return this._message;
	}

	public get isCritical(): boolean {
		return this._isCritical;
	}

	public toString(): string {
		// Ex 1: [Critical] A big mess has happened!
		//		 <stacktrace here>
		//
		// Ex 2: [Minor]
		//		 <stacktrace here>
		return `[${ (this._isCritical ? 'Critical' : 'Minor') }] ${ this._message ? this._message : '' } \n ${this.stack}`;
	}
}

/**
 * Represents a serious problem that may cause the system in unstable state 
 * and need restarting.
 */
export class CriticalException extends Exception {

	constructor(message?: string) {
		super(message, false, CriticalException);
	}
}

/**
 * Represents an acceptable problem that can be handled 
 * and the system does not need restarting.
 */
export class MinorException extends Exception {

	constructor(message?: string) {
		super(message, false, MinorException);
	}
}

/**
 * Represents an error where the provided argument of a function or constructor
 * is not as expected.
 */
export class InvalidArgumentException extends Exception {

	constructor(argName: string, message?: string) {
		super(`The argument "${argName}" is invalid! ${(message ? message : '')}`, true, InvalidArgumentException);
	}
}

/**
 * Represents an error when an unimplemented method is called.
 */
export class NotImplementedException extends Exception {
	
	constructor(message?: string) {
		super(message, false, NotImplementedException);
	}
}
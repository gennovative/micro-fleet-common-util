"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Error.stackTraceLimit = 20;
class Exception {
    /**
     *
     * @param _message
     * @param _isCritical
     * @param exceptionClass {class} The exception class to exclude from stacktrace.
     */
    constructor(_message, _isCritical, exceptionClass) {
        this._message = _message;
        this._isCritical = _isCritical;
        this.stack = '';
        this._name = '';
        Error.captureStackTrace(this, exceptionClass || Exception);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get message() {
        return this._message;
    }
    get isCritical() {
        return this._isCritical;
    }
    toString() {
        // Ex 1: [Critical] A big mess has happened!
        //		 <stacktrace here>
        //
        // Ex 2: [Minor]
        //		 <stacktrace here>
        return `[${(this._isCritical ? 'Critical' : 'Minor')}] ${this._message ? this._message : ''} \n ${this.stack}`;
    }
}
exports.Exception = Exception;
/**
 * Represents a serious problem that may cause the system in unstable state
 * and need restarting.
 */
class CriticalException extends Exception {
    constructor(message) {
        super(message, false, CriticalException);
    }
}
exports.CriticalException = CriticalException;
/**
 * Represents an acceptable problem that can be handled
 * and the system does not need restarting.
 */
class MinorException extends Exception {
    constructor(message) {
        super(message, false, MinorException);
    }
}
exports.MinorException = MinorException;
/**
 * Represents an error where the provided argument of a function or constructor
 * is not as expected.
 */
class InvalidArgumentException extends Exception {
    constructor(argName, message) {
        super(`The argument "${argName}" is invalid! ${(message ? message : '')}`, true, InvalidArgumentException);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
/**
 * Represents an error when an unimplemented method is called.
 */
class NotImplementedException extends Exception {
    constructor(message) {
        super(message, false, NotImplementedException);
    }
}
exports.NotImplementedException = NotImplementedException;

//# sourceMappingURL=Exceptions.js.map

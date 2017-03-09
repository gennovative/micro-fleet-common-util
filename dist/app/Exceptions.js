"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception {
    constructor(_message, _isCritical) {
        this._message = _message;
        this._isCritical = _isCritical;
        this.stack = '';
        this._name = '';
        Error.captureStackTrace(this, Exception);
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
class CriticalException extends Exception {
    constructor(message) {
        super(message, false);
    }
}
exports.CriticalException = CriticalException;
class MinorException extends Exception {
    constructor(message) {
        super(message, false);
    }
}
exports.MinorException = MinorException;
class InvalidArgumentException extends Exception {
    constructor(argName, message) {
        super(`The argument "${argName}" is invalid! ${(message ? message : '')}`, true);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;

//# sourceMappingURL=Exceptions.js.map

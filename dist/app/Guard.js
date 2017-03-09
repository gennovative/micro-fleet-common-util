"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const ex = require("./Exceptions");
class Guard {
    //private constructor() {}
    /**
     * Makes sure the specified `target` is not null or undefined.
     * @param name {string} Name to include in error message if assertion fails.
     * @param target {any} Argument to check.
     * @param message {string} Optional error message.
     * @throws {InvalidArgumentException} If assertion fails.
     */
    static assertDefined(name, target, message) {
        if (target === null || target === undefined) {
            throw new ex.InvalidArgumentException(name, message || 'Must not be null or undefined!');
        }
    }
    /**
     * Makes sure the specified `target` is an object, array, or string which is not null or undefined.
     * If `target` is a string or array, it must have `length` greater than 0,
     * If it is an object, it must have at least one property.
     * @param name {string} Name to include in error message if assertion fails.
     * @param target {any} Argument to check.
     * @param message {string} Optional error message.
     * @throws {InvalidArgumentException} If assertion fails.
     */
    static assertNotEmpty(name, target, message) {
        if (_.isEmpty(target)) {
            throw new ex.InvalidArgumentException(name, message || 'Must not be null, undefined or empty!');
        }
    }
    /**
     * Makes sure the specified `target` is a function.
     * @param name {string} Name to include in error message if assertion fails.
     * @param target {any} Argument to check.
     * @param message {string} Optional error message.
     * @throws {InvalidArgumentException} If assertion fails.
     */
    static assertIsFunction(name, target, message) {
        if (!_.isFunction(target)) {
            throw new ex.InvalidArgumentException(name, message || 'Must be a function!');
        }
    }
    /**
     * Makes sure the specified `target` matches Regular Expression `rule`.
     * @param name {string} Name to include in error message if assertion fails.
     * @param target {any} Argument to check.
     * @param message {string} Optional error message.
     * @throws {InvalidArgumentException} If assertion fails.
     */
    static assertIsMatch(name, rule, target, message) {
        if (!rule.test(target)) {
            throw new ex.InvalidArgumentException(name, message || 'Does not match specified rule!');
        }
    }
    /**
     * Makes sure the specified `target` is considered "truthy" based on JavaScript rule.
     * @param target {any} Argument to check.
     * @param message {string} Error message.
     * @param isCritical {boolean} If true, throws CriticalException. Otherwise, throws MinorException when assertion fails.
     * @throws {CriticalException} If assertion fails and `isCritical` is true.
     * @throws {MinorException} If assertion fails and `isCritical` is false.
     */
    static assertIsTruthy(target, message, isCritical = true) {
        if (!target) {
            if (isCritical) {
                throw new ex.CriticalException(message);
            }
            else {
                throw new ex.MinorException(message);
            }
        }
    }
    /**
     * Makes sure the specified `target` is considered "falsey" based on JavaScript rule.
     * @param target {any} Argument to check.
     * @param message {string} Error message.
     * @throws {InvalidArgumentException} If assertion fails.
     */
    static assertIsFalsey(target, message, isCritical = true) {
        Guard.assertIsTruthy(!target, message, isCritical);
    }
}
exports.Guard = Guard;

//# sourceMappingURL=Guard.js.map

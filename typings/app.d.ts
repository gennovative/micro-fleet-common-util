declare module 'back-lib-common-util/Exceptions' {
	export class Exception implements Error {
	    protected _message: string;
	    protected _isCritical: boolean;
	    private _name;
	    private _stack;
	    constructor(_message?: string, _isCritical?: boolean);
	    name: string;
	    stack: string;
	    readonly message: string;
	    readonly isCritical: boolean;
	    toString(): string;
	}
	export class CriticalException extends Exception {
	    constructor(message?: string);
	}
	export class MinorException extends Exception {
	    constructor(message?: string);
	}
	export class InvalidArgumentException extends Exception {
	    constructor(argName: string, message?: string);
	}

}
declare module 'back-lib-common-util/Guard' {
	export class Guard {
	    private constructor();
	    static assertDefined(name: string, target: any, message?: string): void;
	    static assertNotEmpty(name: string, target: any, message?: string): void;
	    static assertIsFunction(name: string, target: any, message?: string): void;
	    static assertIsTruthy(target: any, message: string, isCritical?: boolean): void;
	    static assertIsFalsey(target: any, message: string, isCritical?: boolean): void;
	    static assertIsMatch(name: string, rule: RegExp, target: string, message?: string): void;
	}

}
declare module 'back-lib-common-util/DependencyContainer' {
	import { injectable, inject, interfaces } from 'inversify';
	export class BindingScope<T> {
	    private _binding;
	    constructor(_binding: interfaces.BindingInWhenOnSyntax<T>);
	    asSingleton(): void;
	    asTransient(): void;
	}
	export { injectable, inject };
	export interface INewable<T> extends interfaces.Newable<T> {
	}
	export interface IDependencyContainer {
	    /**
	     * Registers `constructor` as resolvable with key `identifier`.
	     * @param {string | symbol} identifier - The key used to resolve this dependency.
	     * @param {INewable<T>} constructor - A class that will be resolved with `identifier`.
	     *
	     * @return {BindingScope} - A BindingScope instance that allows settings dependency as singleton or transient.
	     */
	    bind<TInterface>(identifier: string | symbol, constructor: INewable<TInterface>): BindingScope<TInterface>;
	    /**
	     * Registers a constant value with key `identifier`.
	     * @param {string | symbol} identifier - The key used to resolve this dependency.
	     * @param {T} value - The constant value to store.
	     */
	    bindConstant<T>(identifier: string | symbol, value: T): any;
	    /**
	     * Retrieves an instance of dependency with all its own dependencies resolved.
	     * @param {string | Symbol} - The key that was used to register before.
	     *
	     * @return {T} - An instance of registered type, or null if that type was not registered.
	     */
	    resolve<T>(identifier: string | symbol): T;
	    /**
	     * Gets rid of all registered dependencies.
	     */
	    dispose(): void;
	}
	export class DependencyContainer {
	    private _container;
	    constructor();
	    bind<TInterface>(identifier: string | symbol, constructor: INewable<TInterface>): BindingScope<TInterface>;
	    bindConstant<T>(identifier: string | symbol, value: T): void;
	    resolve<T>(identifier: string | symbol): T;
	    dispose(): void;
	    private assertNotDisposed();
	}

}
declare module 'back-lib-common-util' {
	export * from 'back-lib-common-util/DependencyContainer';
	export * from 'back-lib-common-util/Exceptions';
	export * from 'back-lib-common-util/Guard';
}

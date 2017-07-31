import { injectable, inject, Container, interfaces } from 'inversify';
import { Guard } from './Guard';


export class BindingScope<T> {
	
	constructor(private _binding: interfaces.BindingInWhenOnSyntax<T>) {
		
	}

	asSingleton(): void {
		this._binding.inSingletonScope();
	}

	asTransient(): void {
		this._binding.inTransientScope();
	}
}


export { injectable, inject };

export interface INewable<T> extends interfaces.Newable<T> { }

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
	bindConstant<T>(identifier: string | symbol, value: T);

	/**
	 * Gets rid of all registered dependencies.
	 */
	dispose(): void;

	/**
	 * Checks if an identifier is bound with any dependency.
	 */
	isBound(identifier: string | symbol): boolean;

	/**
	 * Retrieves an instance of dependency with all its own dependencies resolved.
	 * @param {string | Symbol} - The key that was used to register before.
	 * 
	 * @return {T} - An instance of registered type, or null if that type was not registered.
	 */
	resolve<T>(identifier: string | symbol): T;

	/**
	 * Gets rid of the dependency related to this identifier.
	 */
	unbind(identifier: string | symbol): void;
}

export class DependencyContainer {
	private _container: Container;

	// TODO: Should be singleton
	constructor() {
		this._container = new Container();
	}

	public bind<TInterface>(identifier: string | symbol, constructor: INewable<TInterface>): BindingScope<TInterface> {
		this.assertNotDisposed();
		Guard.assertArgDefined('constructor', constructor);

		let container = this._container,
			binding, scope;
		
		this.unboundIfDuplicate(identifier);

		binding = this._container.bind<TInterface>(identifier).to(constructor);
		scope = new BindingScope<TInterface>(binding);

		return scope;
	}

	public bindConstant<T>(identifier: string | symbol, value: T): void {
		this.unboundIfDuplicate(identifier);
		this._container.bind<T>(identifier).toConstantValue(value);
	}

	public dispose(): void {
		this._container.unbindAll();
		this._container = null;
	}

	public isBound(identifier: string | symbol): boolean {
		return this._container.isBound(identifier);
	}

	public resolve<T>(identifier: string | symbol): T {
		this.assertNotDisposed();
		try {
			return this._container.get<T>(identifier);
		} catch (ex) {
			console.log('Resolve Error: ' + ex);
			return null;
		}
	}

	public unbind(identifier: string | symbol): void {
		this._container.unbind(identifier);
	}


	private assertNotDisposed() {
		if (!this._container) {
			throw 'Container has been disposed!';
		}
	}

	private unboundIfDuplicate(identifier: string | symbol): void {
		if (this._container.isBound(identifier)) {
			this._container.unbind(identifier);
		}
	}
}
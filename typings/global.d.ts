/**
 * A data type representing Json object.
 */
interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}

interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

// Based on ES6 native Promise definition
declare type PromiseResolveFn = (value?: any | PromiseLike<any>) => void;
declare type PromiseRejectFn = (reason?: any) => void;

/**
 * If an object wants to be initialized when microservice proccess starts, it must
 * implements this interface to be able to add to add-on list.
 */
declare interface IServiceAddOn {
	/**
	 * Initializes this add-on.
	 * @returns A promise that resolves `true` if success, rejects if otherwise.
	 */
	init(): Promise<void>;
	
	/**
	 * Invoked before `dispose` is called.
	 */
	deadLetter(): Promise<void>;

	/**
	 * Stops this add-on and cleans all resources.
	 */
	dispose(): Promise<void>;

}
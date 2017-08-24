import * as FlakeId from 'flake-idgen';
import { Int64BE } from 'int64-buffer';


export type BigIdOptions = {
	
	/**
	 * Datacenter identifier. It can have values from 0 to 31 (5 bits).
	 */
	datacenter?: number,
	
	/**
	 * Worker identifier. It can have values from 0 to 31 (5 bits).
	 */
	worker?: number,

	/**
	 * Generator identifier. It can have values from 0 to 1023 (10 bits).
	 * It can be provided instead of `datacenter` and `worker` identifiers.
	 */
	id?: number,

	/**
	 * Number used to reduce value of a generated timestamp. 
	 * Note that this number should not exceed number of milliseconds elapsed
	 * since 1 January 1970 00:00:00 UTC (value of `Date.now()`).
	 * It can be used to generate smaller ids.
	 */
	epoch?: number,
};

export type Int64 = {
	toNumber(): number,
	toJSON(): number,
	toString(radix?: number): string,
	toBuffer(raw?: boolean): Buffer,
};

/**
 * Provides methods to generate bigint ID
 */
export class BigIdGenerator {

	private _generator: FlakeId;

	constructor(options?: BigIdOptions) {
		this._generator = new FlakeId(options);
	}

	/**
	 * Generates a new ID.
	 */
	public next(): Int64 {
		return new Int64BE(this._generator.next());
	}

	public wrap(value: string, radix?: number): Int64;
	public wrap(buf: Buffer): Int64;
	public wrap(value?: number): Int64;

	
	/**
	 * Parses input value into bigint type.
	 * @param value The value to be wrapped. If not given, the behavior is same with `next()`.
	 */
	public wrap(): Int64 {
		if (!arguments.length) {
			return this.next();
		}
		// Equivalent with `new Int64BE(....)`
		return Int64BE.apply(null, arguments);
	}
}
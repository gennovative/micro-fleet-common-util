"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlakeId = require("flake-idgen");
const int64_buffer_1 = require("int64-buffer");
/**
 * Provides methods to generate bigint ID
 */
class BigIdGenerator {
    constructor(options) {
        this._generator = new FlakeId(options);
    }
    /**
     * Generates a new ID.
     */
    next() {
        return new int64_buffer_1.Int64BE(this._generator.next());
    }
    /**
     * Parses input value into bigint type.
     * @param value The value to be wrapped. If not given, the behavior is same with `next()`.
     */
    wrap() {
        if (!arguments.length) {
            return this.next();
        }
        // Equivalent with `new Int64BE(....)`
        return int64_buffer_1.Int64BE.apply(null, arguments);
    }
}
exports.BigIdGenerator = BigIdGenerator;

//# sourceMappingURL=BigIdGenerator.js.map

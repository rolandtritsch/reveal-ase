"use strict";
exports.__esModule = true;
exports.fibonacci = void 0;
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
exports.fibonacci = fibonacci;

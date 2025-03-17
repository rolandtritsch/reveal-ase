export function fibonacci(n: number): number {
    // Create a memoization cache
    const memo = new Map<number, number>();
    
    // Inner function that uses the memo
    function fib(n: number): number {
        // Base cases
        if (n <= 1) return n;
        
        // Check if the value exists in memo
        if (memo.has(n)) {
            return memo.get(n)!;
        }
        
        // Calculate and store the result
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
    }
    
    return fib(n);
}

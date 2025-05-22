#!/bin/bash

# Usage: ./fibonacci.sh n
# Calculates the n-th Fibonacci number (n must be a non-negative integer ≤50)
# F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n≥2
# Outputs the result number to STDOUT
# Errors are reported to STDERR

# Validate argument count
if [ $# -ne 1 ]; then
    echo "Error: Exactly one argument required" >&2
    exit 1
fi

# Validate input format (non-negative integer, no leading zeros except 0 itself)
if ! [[ "$1" =~ ^0$|^[1-9][0-9]*$ ]]; then
    echo "Error: '$1' is not a valid non-negative integer" >&2
    exit 1
fi

# Validate input range (n ≤ 50)
if [ $1 -gt 50 ]; then
    echo "Error: Value must be ≤50" >&2
    exit 1
fi

# Recursive Fibonacci function
fib() {
    local n=$1
    if [ $n -eq 0 ]; then
        echo 0
    elif [ $n -eq 1 ]; then
        echo 1
    else
        echo $(( $(fib $((n-1)) ) + $(fib $((n-2)) ) ))
    fi
}

# Calculate and output result
result=$(fib $1)
        echo $result

exit 0


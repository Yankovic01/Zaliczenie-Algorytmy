// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    switch(n){
        case "1":
            return 0;
        case "2":
            return 1;
        default:  
            let fibn = [0, 1];
  
            for (let i = 2; i <= n; i++) {
              fibn[i] = fibn[i - 1] + fibn[i - 2];
            }
        
            return fibArray[n];
    }
  }
module.exports = fib;

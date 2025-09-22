function doMath(a, b, callback) {
            return callback(a, b)
        }

        let sum = (a, b)=> a + b;
        let product = (a, b)=> a * b;

        console.log(doMath(2, 4, sum));
        console.log(doMath(2, 4, product));
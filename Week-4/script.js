
function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNums.push(numbers[i]);
        } else {
            oddNums.push(numbers[i]);
        }
    }

    evenNums.sort(function (a, b) {
        return a - b;
    });

    oddNums.sort(function (a, b) {
        return a - b;
    });

    console.log("Even numbers:", evenNums.length > 0 ? evenNums.join('\n') : 'None');
    console.log("Odd numbers:", oddNums.length > 0 ? oddNums.join('\n') : 'None');
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums);
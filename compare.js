function compare(number) {
    if (number > 0) {
        console.log(`${number} is greater than zero`)
    } else if (number === 0) {
        console.log(`The number is exactly 0`)
    } else {
        console.log(`${number} is less than zero`)
    };
};

compare(8);
compare(-1);
compare(0);
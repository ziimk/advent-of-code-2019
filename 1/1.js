const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function calculate(mass) {
    return Math.floor(Number(mass) / 3) - 2;
}

function calculateRecursive(mass, sum = 0) {
    const fuel = calculate(mass);

    sum += fuel;

    if (fuel > 8) { // Math.floor(8/3)-2 = 0
        return calculateRecursive(fuel, sum);
    }

    return sum;
}

(async () => {
    const file = await readFile(`${__dirname}/input.txt`, 'utf8');
    const rows = file.split('\n');

    // part 1
    console.log(rows.reduce((a, b) => a + calculate(b), 0));

    // part 2
    console.log(rows.reduce((a, b) => a + calculateRecursive(b), 0));
})().catch(error => console.log(error));
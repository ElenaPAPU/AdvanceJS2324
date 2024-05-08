class MathUtil {

    static sum(...numbers) {
        let total = 0;

        // for (const number of numbers) {
        //     total += parseInt(number);
        // }
        for (let i =0; i<numbers.length; i++){
            total += parseInt(numbers[i]);
        }
        return total;

    }
}

const result = MathUtil.sum(1, 2, 3, 1, 1, 1, 1, 1);
console.log(result);
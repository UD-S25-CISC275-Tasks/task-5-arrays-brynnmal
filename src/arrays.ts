/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if(numbers.length == 0){
        return numbers;
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((price:number): number => price*3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num:string): number => isNaN(parseInt(num, 10)) ? 0: parseInt(num, 10));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let new_amt: string[] = amounts.map((amt:string): string => (amt[0] === "$") ? (amt.slice(1)) : amt);
    return stringsToIntegers(new_amt);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let no_quest: string[] = messages.filter((message: string): boolean => message[message.length - 1] != "?")
    return no_quest.map((message: string): string => (message[message.length-1] === "!") ? message.toUpperCase(): message);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let filtered: string[] = words.filter((word:string): boolean => (word.length < 4));
    return filtered.length
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if(colors.length === 0){
        return true;
    }
    let truth: boolean = colors.every((color: string): boolean => (color === "red") || (color === "blue") || (color === "green"));
    return truth;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if(addends.length === 0){
        return "0=0";
    }
    let sum: number = 0;
    addends.map((num: number): number =>  sum = num + sum);
    let together: string = addends.join("+");
    return sum.toString() + "=" + together;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index: number = values.findIndex((num: number): boolean => num<0);
    if(index === -1){
        return [...values, values.reduce((total: number, num: number)=> total+num, 0)];
    }else{
        let new_vals: number[] = values.slice(0, index);
        let final: number[] = [...values];
        final.splice(index+1, 0, new_vals.reduce((total: number, num: number)=> total+num, 0));
        console.log(final);
        return final;
    }
}

function isPalindrome(x: number): boolean {
    let y: number = Number(x.toString().split('').reverse().join(''))
    return x === y  ? true : false
};
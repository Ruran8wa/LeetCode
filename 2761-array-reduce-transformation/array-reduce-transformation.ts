type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc = init;
    acc !== undefined ? init : nums[0]
    for(let i = init !== undefined ? 0 : 1; i < nums.length; i++){
        acc = fn(acc, nums[i])
    }

    return acc
};
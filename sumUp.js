
function sumUp(nums, n) {
    if (nums.length <= 2) {
        return nums.map((a,b) => b)
    }
    if (n !== 0) {
        nums = nums.filter(a => a <= n)
    }
    console.log(nums)
    let i = 0
    let rep = []
    let ar = []
    while (nums.length > i) {
        let j
        for (j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === n || nums[i] - nums[j] === n) {
                rep.push(nums[i], nums[j])
            }
        }
        i++
    }
    ar.push(rep[rep.length - 1], rep[rep.length - 2])
    return nums.map((a,b) => {
        if (ar.includes(a)) {
            return b
        }
    }).filter(a => typeof a === "number")
}

console.log(sumUp([-1,-2,-3,-4,-5], 8))
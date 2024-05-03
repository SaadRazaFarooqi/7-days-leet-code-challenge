function removeDuplicates(nums) {
    let count = 1
let index = 1
for(let i = 1;i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
        count++
    
    if (count <= 2) {
        nums[index] = nums[i]
    index++
    }
    } else {
count = 1
    nums[index] = nums[i]
    index++
    }    
}
return index
}
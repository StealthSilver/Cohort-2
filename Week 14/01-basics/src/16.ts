// get the max value from the array

function getMax(nums : number[]){ // giving arrays as the type
    let maxValue = -10000000000;

    for(let i=0; i<nums.length; i++){
        if(nums[i] > maxValue){
            maxValue = nums[i]
        }
    }
    return maxValue
}

console.log(getMax([1,2,3,4]));

var twoSum = function (nums, target) {
  
  for (let index = 0; index < nums.length; index++) {
    var diff = target - nums[index];
    //    4       9 -   5
    var diffIndex = nums.indexOf(diff); // 3
    //3
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};

console.log(twoSum([2, 5, 3, 4, 5, 4, 5], 9));

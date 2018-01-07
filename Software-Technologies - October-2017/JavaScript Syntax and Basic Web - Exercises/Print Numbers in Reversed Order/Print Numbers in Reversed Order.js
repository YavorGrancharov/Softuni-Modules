function printNumberInReversedOrder(arr) {
  let nums = arr.map(Number);
  let rev = nums.revese();
  for(let i =0;i<nums.length;i++) {
  	console.log(nums[i]);
  }
}
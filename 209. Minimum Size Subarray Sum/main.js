/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Sliding Window
var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  let min = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    // 一回rightを進める
    sum += nums[right];

    // 大きくなったらleftを進める
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return min === Infinity ? 0 : min;
};

const t1 = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(t1 === 2);

const t2 = minSubArrayLen(4, [1, 4, 4]);
console.log(t2 === 1);

const t3 = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
console.log(t3 === 0);

const t4 = minSubArrayLen(11, [1, 2, 3, 4, 5]);
console.log(t4 === 3);

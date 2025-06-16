// ✅ Use copyWithin() to copy [3, 4, 5] to the beginning of the array.
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 2);
console.log(arr);
console.log("\n".repeat(3));

// 🧩 2. Copy a middle part to the end || 📌 Expected result: [10, 20, 30, 20, 30]
let data = [10, 20, 30, 40, 50];
data.copyWithin(-2, 1);
console.log(data);
console.log("\n".repeat(3));

// 🧩 3. Use negative indexes || [1, 2, 3, 1, 2]
let nums = [1, 2, 3, 4, 5];
nums.copyWithin(-2, 0);
console.log(nums);
console.log("\n".repeat(3));

// 🧩 4. Copy from index 1 to 3 into index 0 || 📌 Expected result:
// ['b', 'c', 'c', 'd', 'e']

let letters = ["a", "b", "c", "d", "e"];
letters.copyWithin(0, 1, 3);
console.log(letters);

/*🔍 Breakdown:
target = 0: Start pasting at index 0.
start = 1: Start copying from index 1 ('b').
end = 3: Stop before index 3 (so it copies 'b' and 'c').
*/

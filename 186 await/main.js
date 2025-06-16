function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data received");
    }, 2000);
  });
}

async function showData() {
  console.log("1. Start");
  const result = await getData(); // ⏳ waits here
  console.log("2. " + result); // ✅ continues after promise resolves
  console.log("3. End");
}

showData();

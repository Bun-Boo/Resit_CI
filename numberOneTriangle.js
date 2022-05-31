function numberOneTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}
let n = prompt("Nhap n :");
numberOneTriangle(n);

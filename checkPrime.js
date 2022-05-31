const numberA = document.getElementById("numberA").value;
const numberB = document.getElementById("numberB").value;
const listPrime = document.getElementById("prime");
const btn = document.getElementById("btn");
function checkPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
btn.addEventListener("click", () => {
  for (let i = numberA; i <= numberB; i++) {
    if (checkPrime(i)) {
      console.log(i);
      listPrime.innerHTML = i;
    }
  }
});

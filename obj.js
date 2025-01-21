function saveName() {
  const nameInput = document.getElementById("nameInput").value;
  if (nameInput) {
    localStorage.setItem("userName", nameInput);
  }
}
function removeName() {
  localStorage.removeItem("userName");
}

//orologio

let counter = sessionStorage.getItem("counter");
if (!counter) {
  counter = 0;
}
function updateCounter() {
  counter++;
  sessionStorage.setItem("counter", counter);
  document.getElementById("counterDisplay").textContent = counter;
}
setInterval(updateCounter, 1000);

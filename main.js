const getBtn = document.querySelectorAll(".btn");
console.log(getBtn);

for (let i = 0; i < getBtn.length; i++) {
    let count = 0;
  console.log(getBtn[i]);
  getBtn[i].onclick = (e) => {
    console.log(e.target);
    count += 1;
    display(count, i);
  };
}

function display(count, num) {
  const result = `<span class="counter">${count}</span>`;
  const addResult = document.querySelectorAll(".countNum .counter");
  //console.log(document.querySelectorAll(".countNum"));
  for (let i = 0; i < addResult.length; i++) {
    if (i == num) {
      addResult[i].innerHTML = count;
    }
  }
  return result;
}

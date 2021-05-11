var x = document.getElementById('a').value;

document.getElementById('c').onclick = logInput()

function logInput() {
  console.log(x)
  document.getElementById('p').innerHTML = x;
}

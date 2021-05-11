document.getElementById('c').onclick = function() {logInput()}

function logInput() {
    var x = document.getElementById('a').value;
    console.log(x)
    document.getElementById('p').innerHTML = x;
}

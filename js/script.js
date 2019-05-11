var fact = document.getElementById('fact');
var factInfo = document.getElementById('factInfo');

var numberInput = document.getElementById('numberInput');

numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
    var number = numberInput.value;


    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                fact.style.display = 'block';
                factInfo.innerHTML = data;
            }
            if (number == '') {
                fact.style.display = 'none';
            }
        })
}
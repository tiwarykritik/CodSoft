let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screen.value += buttonText;
        }
        else if (buttonText == 'C') {
            screen.value = "";
        }
        else if (buttonText == 'Del') {
            var number = screen.value;
            var len = number.length - 1;
            var newnumber = number.substring(0, len);
            screen.value = newnumber;
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }
        else {
            screen.value += buttonText;
        }

    })
}

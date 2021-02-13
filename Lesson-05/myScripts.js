total = 5000;
pressedKey = '';

function bankApplication() {
    pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance')
    pressedKey = pressedKey.toUpperCase();
    do {
        switch (pressedKey) {
            case 'Q':
                pressedKey = 'Q';
                break;
            case 'W':
                withdrawlAmount = Number(prompt('Enter the amount you wish to withdraw'));
                if (withdrawlAmount < total) {
                total = total - withdrawlAmount;
                alert('Your new total is ' + '$' + total);
                pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();

                }
                else {
                alert('You cannot withdraw any more money.')
                pressedKey = pressedKey.toUpperCase();
                
                }
                 pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();
                
                break;

            case 'D':
                depositAmount = Number(prompt('Enter the amount you wish to deposit'));
                if (depositAmount < 50000){
                total = total + depositAmount;
                alert('Your new total is ' + '$' + total);
                pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();
                }
                else {
                alert('You cannot deposit more than $50,000.')
                pressedKey = pressedKey.toUpperCase();
                
                }
                pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();
                
                break;
            case 'B':
                alert('Your total is ' + '$' + total);
                pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();
                break;
            default:

                alert('Invalid input');
                pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                pressedKey = pressedKey.toUpperCase();
        }//switch statement closing bracket//
    }//do loop closing bracket//
    while (pressedKey != 'Q');



}//function closing bracket//
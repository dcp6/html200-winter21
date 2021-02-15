total = 5000;
pressedKey = '';

function bankApplication() {
    pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
    pressedKey = pressedKey.toUpperCase();
    do {
        switch (pressedKey) {
            case 'Q':
                pressedKey = 'Q';
                break;
            case 'W':
                withdrawlAmount = Number(prompt('Enter the amount you wish to withdraw'));
                totalLeft = total - withdrawlAmount;
                if (totalLeft > 300) {
                    total = total - withdrawlAmount;
                    alert('Your new total is ' + '$' + total);
                    pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                    pressedKey = pressedKey.toUpperCase();

                }//withdraw amount bracket//
                else if (totalLeft < 300 && totalLeft >= 0) {
                    let confirmBox = confirm('Please confirm you wish to go below a balance of $300.');
                    if (confirmBox = true){
                    total = total - withdrawlAmount;
                    alert('Your total is:' + ' $' + total);
                    pressedKey = pressedKey.toUpperCase();
                    }//confirm box closing bracket//
                    else {
                    alert('You chose not to withdraw any money');
                   
                    }//confirm box second closing bracket//

                } else {
                    alert('You cannot withdraw any more money.');
                }
                  pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
                    pressedKey = pressedKey.toUpperCase();
                 break;

            case 'D':
                depositAmount = Number(prompt('Enter the amount you wish to deposit'));
                if (depositAmount < 50000) {
                    total = total + depositAmount;
                    alert('Your new total is ' + '$' + total);
                    pressedKey = pressedKey.toUpperCase();
                } else {
                    alert('You cannot deposit more than $50,000.');
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
        } //switch statement closing bracket//
    } //do loop closing bracket//
    while (pressedKey != 'Q');



} //function closing bracket//
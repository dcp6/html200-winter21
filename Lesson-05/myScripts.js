total = 1000;
pressedKey ='';
function bankApplication(){
    pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance')
    pressedKey = pressedKey.toUpperCase();
    do {
    switch (pressedKey) {
        case 'Q':
        alert('You pressed Q');
        break;
        case 'W':
         total = total- Number(prompt('Enter the amount you wish to withdraw'));
         alert('Your new total is ' + '$' + total);
        pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
        break;

        case 'D':
        total = total + Number(prompt('Enter the amount you wish to deposit'));
        alert('Your new total is ' + '$' + total);
        break;
        default:
        alert('Invalid input');
        
    }
    }
    while (pressedKey!==Q);   
    
    
    
}

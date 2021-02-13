total = 5000;
pressedKey ='';
function bankApplication(){
    pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance')
    pressedKey = pressedKey.toUpperCase();
    do {
    switch (pressedKey) {
        case 'Q':
     pressedKey = 'Q';
        
        break;
        case 'W':
         total = total- Number(prompt('Enter the amount you wish to withdraw'));
         alert('Your new total is ' + '$' + total);
        pressedKey = prompt('Press Q to quit, W to withdraw, D to deposit, or B to see your balance');
         pressedKey = pressedKey.toUpperCase();
        break;

        case 'D':
        total = total + Number(prompt('Enter the amount you wish to deposit'));
        alert('Your new total is ' + '$' + total);
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
    }
    }
    while (pressedKey !='Q');   
    
    
    
}

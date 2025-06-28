function resetButton(){
    localStorage.clear();;
    document.querySelector('.user').innerText='-';
    document.querySelector('.comp').innerText='-';
    document.querySelector('.outcome').innerText='-';
    document.querySelector('.score').innerText='Win:0 Lost:0 Tie:0;';
}    
function doTheWork(userChoice){  
    let result = JSON.parse(localStorage.getItem('choice')) || {
        Win:0 ,
        Loss:0,
        Tie:0,
    };
    function randomGenerator(){
    let randomChoice = Math.random()*3;
    if(randomChoice<=1)
        return `Stone`;
    else if(randomChoice<=2)
        return `Paper`;
    else 
        return `Scissors`;
    }
    function condition(){
        if(userChoice==compChoice){
            result.Tie++;  
            return 'It is a Tie'
        }
        else if((userChoice=='Stone' && compChoice=='Paper') || (userChoice=='Scissors' && compChoice=='Stone') || (userChoice=='Paper' && compChoice=='Scissors')){
            result.Loss++;
            return 'You Lost'
        }
        else{
            result.Win++;
            return 'You Won'
        }
    }
    let compChoice=randomGenerator()
    let checkCondition=condition(userChoice, compChoice)
    document.querySelector('.user').innerText=`You chose ${userChoice}`;
    document.querySelector('.comp').innerText=`Computer chose ${compChoice}`;
    document.querySelector('.outcome').innerText=`${checkCondition}`
    document.querySelector('.score').innerText=`Win: ${result.Win} Lost: ${result.Loss} Tie: ${result.Tie}`
    localStorage.setItem('choice',JSON.stringify(result))
}
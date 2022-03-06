

function computerPlay(){
    
    let RPS = Math.floor(Math.random() * 3)
    let result = ''
    
    

    switch(RPS)
    {
        case 0:
            result = 'rock'
            break
        case 1:
            result = 'paper'
            break
        case 2:
            result = 'scissors'
            break;
        default:
            console.log('N/A')
            
    }

    console.log(`computer selected ${result}`)
    return result
}






function playRound(playerSelection, computerSelection) {

    winner = ''

    if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        winner = 'Computer!'

    } else if(playerSelection === 'rock' && computerSelection === 'rock')
    {
       winner = 'Draw!'

    } else if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
       winner = 'Player Wins'

    } else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
       winner = 'Computer Wins!'

    } else if(playerSelection === 'scissors' && computerSelection === 'scissors')
    {
       winner = 'Draw!'

    } else if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
       winner = 'Player Wins!'

    }  else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
       winner = 'Player Wins!'

    } else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
       winner =  'Computer Wins!'

    } else if(playerSelection === 'paper' && computerSelection === 'paper')
    {
       winner = 'Draw!'

    } 

    console.log(winner)
    return winner

}




function game(){

    for(let i = 0; i < 5; i++)
    {

        let playerSelection = prompt('enter rock, paper or scissors').toLowerCase()
      //  let playerSelection = input.toLowerCase
        
        let computerSelection = computerPlay();
        console.log(playerSelection)
        console.log(computerSelection)
        
        playRound(playerSelection, computerSelection)
    }
}


console.log(game())
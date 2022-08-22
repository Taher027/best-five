document.getElementById('player_calculate_btn').addEventListener('click', function(){
 
const selectedPlayer = playerArray.length;
const budget = getInputValue('perPlayer_cost');
const playerexpenses = getElementValue('players_total')
// console.log(playerexpenses)
// console.log(budget)
// console.log(selectedPlayer);



const toatlPlayerCost = selectedPlayer * budget;

 console.log(toatlPlayerCost)



})
document.getElementById('player_calculate_btn').addEventListener('click', function () {

    const selectedPlayer = playerArray.length;
    const budget = getInputValue('perPlayer_cost');
    const toatlPlayerCost = selectedPlayer * budget;
    // console.log(playerexpenses)
    // console.log(budget)
    // console.log(selectedPlayer);
  const playerExpenses = document.getElementById('players_total')
    const previousPlayerExpensesString = playerExpenses.innerText;
    const previousPlayerExpenses = parseFloat(previousPlayerExpensesString);

    playerExpenses.innerText = toatlPlayerCost;

    

})
document.getElementById('calculate_total').addEventListener('click', function(){

    
    const managerCost = getInputValue('manager_cost');
    const coachCost = getInputValue('coach_cost');
    const playerCost = getElementValue('players_total');
    const toatlCost = managerCost + coachCost + playerCost;

    const totalElementValue = document.getElementById('total_cost')
    const totalElementValueString = totalElementValue.innerText;
    const Totalvalue = parseFloat(totalElementValueString);
    totalElementValue.innerText = toatlCost;

})
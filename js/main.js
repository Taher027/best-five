const playerArray = [];

function displayPlayerName(playerName){
    // console.log(PlayerName)
    const playerList = document.getElementById('player_list')
    playerList.innerHTML = '';
    if(playerArray.length <=5){
    
   for(i = 0; i < playerName.length; i++){
    const name = playerArray[i].playerName;
    const li = document.createElement("tr")
    li.innerHTML = `
    <table>
    <tr>

    <th class= "text-2xl text-white">${i+1} </th>
    <td class= "text-2xl text-white">${name}</td>

    </tr>
    </table>
    `;
    playerList.appendChild(li)
   }
}
else{
    alert('You alredy selected your Best Five')
}
}

function selectPlayer(playerBtn){

    const playerName = playerBtn.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName : playerName
    }
    
    playerArray.push(playerObj)
    const playerArraylength = playerArray.length;
    

    displayPlayerName(playerArray);
    return playerArraylength;

}


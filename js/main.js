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
    

    displayPlayerName(playerArray);

}

// button disable after click 


document.getElementById("btn1").addEventListener('click', function(){
    this.disabled = true;
    
})
document.getElementById("btn2").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn3").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn4").addEventListener('click', function(){
    this.disabled = true;

})
document.getElementById("btn5").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn6").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn7").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn8").addEventListener('click', function(){
    this.disabled = true;
})
document.getElementById("btn9").addEventListener('click', function(){
    this.disabled = true;
})
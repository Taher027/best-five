// getInput value by using document.getElementById

function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
    const newInputValueString = inputField.value;


    const newInputValue = parseFloat(newInputValueString);
    return newInputValue;
}

function getElementValue(ElementId){
    const elementValue = document.getElementById(ElementId);
}

{/* <h2 class="text-white text-2xl text-white mt-6">Player Expenses $<spanid="players_total">5000</span></h2>  */}
                                     
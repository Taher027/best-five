// getInput value by using document.getElementById

function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
    const newInputValueString = inputField.value;


    const newInputValue = parseFloat(newInputValueString);
    inputField.value = '';
    return newInputValue;
}


function getElementValue(elementId){

    const inputField = document.getElementById(elementId);
    const newInputValueString = inputField.innerText;


    const newInputValue = parseFloat(newInputValueString);
    inputField.innerText = '';
    return newInputValue;
}
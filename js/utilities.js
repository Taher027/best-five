// getInput value by using document.getElementById

function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const newInputValueString = inputField.value;


    const newInputValue = parseFloat(newInputValueString);
    return newInputValue;
}

function getElementValue(ElementId) {

    const ElementValue = document.getElementById(ElementId);
    const elementValueString = ElementValue.innerText;
    const newElementValue = parseFloat(elementValueString);
    return newElementValue;

}

function disablebtn(button){
    button.disabled = true;
}


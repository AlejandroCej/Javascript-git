// GroceryPrice
const lays = 17.50;
const pepsi = 15;
const gum = 12.50;
//html variables
let laysAmount;
let pepsiAmount;
let gumAmount;

function sumPrice() {
    laysAmount = parseFloat(document.getElementById('laysAmount').value);
    pepsiAmount = parseFloat(document.getElementById('pepsiAmount').value);
    gumAmount = parseFloat(document.getElementById('gumAmount').value);

    let result = (lays*laysAmount) + (pepsi*pepsiAmount) + (gum*gumAmount);
    document.getElementById('result').innerText = `The total amount is: ${result}`;
}
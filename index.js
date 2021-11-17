/*- Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
- Store this information using the most appropriate data structures we've studied so far
- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
- Output a list displaying each item and its price
- Output the total at the end */

const shoppingListItems = ['Milk', 'Cocoa' , 'Salad', 'Carrots', 'Tomatoes', 'Ready meals'];
const shoppingListPrices = [ 1.20, 2.00, 2.00, 2.00, 2.50, 5.00];
let askTheUser=true

while(askTheUser==true){
    const addItem = prompt("Add new item?")
    shoppingListItems.push(addItem)
    const addPrice = prompt("Add the new item price?")
    shoppingListPrices.push(addPrice)
    if (Number.isNaN(addPrice) || addPrice<0){
        alert("Enter a positive number")
    } else if(addItem==null || addItem=="" || addPrice==null || addPrice=="") {
        alert("You need to write something!!!")
    }
    else{
        let confirmTheUser = confirm("Would you like to add more?")
        if (confirmTheUser == true) {
            askTheUser= true;
        }else {
            askTheUser = false;
        }
    }

}

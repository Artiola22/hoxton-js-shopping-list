/*- Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
- Store this information using the most appropriate data structures we've studied so far
- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
- Output a list displaying each item and its price
- Output the total at the end */

const shoppingList = [
    { name: 'Milk', price: 1.2 },
    { name: 'Cocoa', price: 2.0 },
    { name: 'Salad', price: 2.0 },
    { name: 'Carrots', price: 2.0 },
    { name: 'Tomatoes', price: 2.5 },
    { name: 'Ready meals', price: 5 }
  ]

  const userItemName = prompt('What item would you like to add?')
const userItemPrice = Number(prompt('How much does it cost?'))

const newItem = { name: userItemName, price: userItemPrice }
shoppingList.push(newItem)

let total= 0
for (const item of shoppingListItems){ 
total += item.addPrice
console.log(`${item.name} costs £${item.price.toFixed(2)}`)
}
console.log(`The total will be: £${total.toFixed(2)})
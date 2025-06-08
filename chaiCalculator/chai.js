//Function to calculate ingredients needed for making kenyan chai
function calculateChaiIngredients(numberOfCups) {
    //log the calculated ingredient amounts
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${numberOfCups * 200} ml`);//200ml of water per cup
    console.log(`Milk: ${numberOfCups * 50} ml`);//50ml of milk per cup
    console.log(`Tea Leaves (Majani): ${numberOfCups} tablespoons`);//1 tablespoon per cup
    console.log(`Sugar (Sukari): ${numberOfCups * 2} teaspoons`);//2 teaspoons per cup
    console.log("\nEnjoy your Chai Bora!");
}
//Prompt the user for number of cups and call the chai calculator
const cups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);

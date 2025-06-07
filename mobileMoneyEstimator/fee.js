//Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015;//1.5% transaction fee

    //Apply minimum fee of KES 10 and maximum fee of KES 70
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    const total = amountToSend + fee;//total amount to be debited

    //output the transaction details to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log(`\nSend Money Securely!`);
}

//Prompt the user for the amount to send and call the fee estimator
const amount = parseFloat(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);

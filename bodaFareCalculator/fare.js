//Function to calculate boda boda fare based on distance
function calculateBodaFare(distanceInKm) {
    const baseFare = 50;//fixed starting fare
    const chargePerKm = 15;//cost per kilometer
    const totalFare = baseFare + (distanceInKm * chargePerKm);//total fare calculation

    //output the fare breakdown to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`\nPanda Pikipiki!`);
}
//Prompt the user for distnace input and call the fare calculatore
const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);
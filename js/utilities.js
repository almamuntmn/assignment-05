function activeButtons(id) {
    document.getElementById('donation-btn').classList.remove('greenBtn');
    document.getElementById('history-btn').classList.remove('greenBtn');

    document.getElementById(id).classList.add('greenBtn')

}


function getInputElementByID(id) {
    const inputValue = document.getElementById(id).value;
       const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getInputTextElementByID(id) {
    const inputValue = document.getElementById(id).innerText;
       const inputNumber = parseFloat(inputValue);
    return inputNumber;
}



//    const addDonation = document.getElementById('donation-input-noakhali').value;
//    const addDonationNumber = parseFloat(addDonation);
//    console.log(addDonationNumber);

//    const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
//    const noakhaliBalanceNumber = parseFloat(noakhaliBalance);

//    const nNewBalance = noakhaliBalanceNumber + addDonationNumber;

//    document.getElementById('noakhali-balance').innerText = nNewBalance;

//    console.log(noakhaliBalance);
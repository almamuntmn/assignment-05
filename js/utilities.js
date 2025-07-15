function activeButtons(id) {
document.getElementById('donation-btn').classList.remove('greenBtn');
document.getElementById('history-btn').classList.remove('greenBtn');

document.getElementById(id).classList.add('greenBtn')

}


function donationAmount(id){
    const donationTk = document.getElementById(id).innerText;
    const amountNumber = parseFloat(donationTk);
    return amountNumber;
}
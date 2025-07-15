document.getElementById('btn-donation-noakhali').addEventListener('click', function () {

    const addDonation = getInputElementByID('donation-input-noakhali');
    console.log(addDonation);

    if (isNaN(addDonation)) {
        alert('Failed to donate money')
        return
    }

    const balance = getInputTextElementByID('balance');
    const noakhaliBalance = getInputTextElementByID('noakhali-balance');
    console.log(noakhaliBalance)

    const noakhaliNewBalance = noakhaliBalance + addDonation;
    const newBalance = balance - addDonation;

    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

    document.getElementById('balance').innerText = newBalance;

})

// feni------------------

document.getElementById('btn-donation-feni').addEventListener('click', function () {

    const addDonation = getInputElementByID('donation-input-feni');
    console.log(addDonation);

        if (isNaN(addDonation)) {
        alert('Failed to donate money')
        return
    }

    const balance = getInputTextElementByID('balance');
    const noakhaliBalance = getInputTextElementByID('feni-balance');
    console.log(noakhaliBalance)

    const noakhaliNewBalance = noakhaliBalance + addDonation;
    const newBalance = balance - addDonation;

    document.getElementById('feni-balance').innerText = noakhaliNewBalance;

    document.getElementById('balance').innerText = newBalance;
})

// third-----------------------------------

document.getElementById('donate-btn-third').addEventListener('click', function () {

    const addDonation = getInputElementByID('donate-input-third');
    console.log(addDonation);

        if (isNaN(addDonation)) {
        alert('Failed to donate money')
        return
    }

    const balance = getInputTextElementByID('balance');
    const noakhaliBalance = getInputTextElementByID('third-balance');
    console.log(noakhaliBalance)

    const noakhaliNewBalance = noakhaliBalance + addDonation;
    const newBalance = balance - addDonation;

    document.getElementById('third-balance').innerText = noakhaliNewBalance;

    document.getElementById('balance').innerText = newBalance;
})


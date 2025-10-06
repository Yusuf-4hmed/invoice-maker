const invoiceTable = document.getElementById('invoice-table');



const addNewTableRow = () => {
    invoiceTable.insertAdjacentHTML('beforeend',`
        <tr>
            <td><input class="date-input" type="date"></td>
            <td><input class="desc-input" type="text"></td>
            <td><input class="price-input" type="text"></td>
        </tr>
    `);
    
}

const pleasePayAmount = document.getElementById('please-pay-amount');

let totalSum = 0;

const tallyTotalSum = () => {
    const priceInputs = document.querySelectorAll('.price-input');
    totalSum = 0;

    priceInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        totalSum += value
    })

    console.log(totalSum)
    return totalSum;
}

invoiceTable.addEventListener('input', e => {
    if (e.target.classList.contains('price-input')){
        tallyTotalSum();
        pleasePayAmount.innerText = `Please pay £${totalSum.toFixed(2)} into the following bank account:`
    }
    
})

const titleFullNameInput = document.getElementById('title-full-name-input');
const manyThanks = document.getElementById('many-thanks')

titleFullNameInput.addEventListener('input', () => {
    manyThanks.innerText = `Many Thanks, ${titleFullNameInput.value}`
})




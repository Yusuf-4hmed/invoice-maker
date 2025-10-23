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

document.getElementById('save-pdf').addEventListener('click', async () => {
  const captureArea = document.getElementById('capture-area');
  const canvas = await html2canvas(captureArea, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('screenshot.pdf');
});

// Saving inputs and laoding them

document.addEventListener('DOMContentLoaded', () => {
  // Get all input references
  const titleFullNameInput = document.getElementById('title-full-name-input');
  const addressInput = document.getElementById('address-input');
  const postcodeInput = document.getElementById('postcode-input');
  const bankNameInput = document.getElementById('bank-name-input');
  const accountHolderNameInput = document.getElementById('account-holder-name-input');
  const accountNumberInput = document.getElementById('account-number-input');
  const sortCodeInput = document.getElementById('sort-code-input');

  // Save function
  const saveNameAndBank = () => {
    localStorage.setItem('title-full-name', titleFullNameInput.value);
    localStorage.setItem('address-input', addressInput.value);
    localStorage.setItem('postcode-input', postcodeInput.value);
    localStorage.setItem('bank-name-input', bankNameInput.value);
    localStorage.setItem('account-holder-name-input', accountHolderNameInput.value);
    localStorage.setItem('account-number-input', accountNumberInput.value);
    localStorage.setItem('sort-code-input', sortCodeInput.value);
  };

  // Load function
  const loadNameAndBank = () => {
    titleFullNameInput.value = localStorage.getItem('title-full-name') || '';
    addressInput.value = localStorage.getItem('address-input') || '';
    postcodeInput.value = localStorage.getItem('postcode-input') || '';
    bankNameInput.value = localStorage.getItem('bank-name-input') || '';
    accountHolderNameInput.value = localStorage.getItem('account-holder-name-input') || '';
    accountNumberInput.value = localStorage.getItem('account-number-input') || '';
    sortCodeInput.value = localStorage.getItem('sort-code-input') || '';
  };

  // Attach to button
  document.getElementById('save-pdf').addEventListener('click', saveNameAndBank);

  // Load on page start
  loadNameAndBank();
});





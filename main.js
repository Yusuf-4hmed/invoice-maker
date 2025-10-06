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
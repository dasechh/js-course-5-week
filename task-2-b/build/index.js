"use strict";
const processSalesData = (salesData) => {
    const customerData = new Map();
    for (const entry of salesData) {
        const [customer, item, quantityStr] = entry.split(' ');
        const quantity = parseInt(quantityStr, 10);
        if (!customerData.has(customer)) {
            customerData.set(customer, new Map());
        }
        const items = customerData.get(customer);
        items.set(item, (items.get(item) || 0) + quantity);
    }
    return customerData;
};
const formatSalesData = (customerData) => {
    const sortedCustomers = Array.from(customerData.keys()).sort();
    return sortedCustomers.map(customer => {
        const items = customerData.get(customer);
        const sortedItems = Array.from(items.keys()).sort();
        return `${customer}:\n` + sortedItems.map(item => `${item} ${items.get(item)}`).join('\n');
    }).join('\n');
};
const displayOutput = (output) => {
    const resultElement = document.getElementById('result');
    resultElement.innerText = output;
};
const generateSalesReport = () => {
    const inputElement = document.getElementById('inputSales');
    const salesData = inputElement.value.trim().split('\n').map(line => line.trim());
    const customerData = processSalesData(salesData);
    const output = formatSalesData(customerData);
    displayOutput(output);
};
const buttonElement = document.getElementById('button');
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', generateSalesReport);
//# sourceMappingURL=index.js.map
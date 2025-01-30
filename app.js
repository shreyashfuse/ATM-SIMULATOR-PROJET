// Sample account data (in a real-world scenario, this would be fetched from a database)
let accounts = {
    "12345": { pin: "54321", balance: 1000, transactions: [] },
    "67890": { pin: "98765", balance: 500, transactions: [] }
};

let currentAccount = null;

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const accountNumber = document.getElementById("account").value;
    const pin = document.getElementById("pin").value;

    if (accounts[accountNumber] && accounts[accountNumber].pin === pin) {
        currentAccount = accountNumber;
        document.getElementById("login").style.display = "none";
        document.getElementById("atm-dashboard").style.display = "block";
    } else {
        alert("Invalid account or PIN");
    }
});

// Show balance
document.getElementById("balance").addEventListener("click", function () {
    document.getElementById("display-balance").style.display = "block";
    document.getElementById("display-balance").innerText = `Balance: $${accounts[currentAccount].balance}`;
});

// Withdraw money
document.getElementById("withdraw").addEventListener("click", function () {
    document.getElementById("withdraw-amount").style.display = "block";
});

document.getElementById("confirm-withdraw").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("withdraw-input").value);
    if (amount <= accounts[currentAccount].balance && amount > 0) {
        accounts[currentAccount].balance -= amount;
        accounts[currentAccount].transactions.push(`Withdrawn: $${amount}`);
        alert(`Successfully withdrew $${amount}`);
        document.getElementById("withdraw-amount").style.display = "none";
    } else {
        alert("Invalid withdrawal amount");
    }
});

// Deposit money
document.getElementById("deposit").addEventListener("click", function () {
    document.getElementById("deposit-amount").style.display = "block";
});

document.getElementById("confirm-deposit").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("deposit-input").value);
    if (amount > 0) {
        accounts[currentAccount].balance += amount;
        accounts[currentAccount].transactions.push(`Deposited: $${amount}`);
        alert(`Successfully deposited $${amount}`);
        document.getElementById("deposit-amount").style.display = "none";
    } else {
        alert("Invalid deposit amount");
    }
});

// View transaction history
document.getElementById("history").addEventListener("click", function () {
    document.getElementById("transaction-history").style.display = "block";
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    accounts[currentAccount].transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.textContent = transaction;
        historyList.appendChild(li);
    });
});

// Change PIN
document.getElementById("pin-change").addEventListener("click", function () {
    document.getElementById("pin-change-section").style.display = "block";
});

document.getElementById("confirm-pin-change").addEventListener("click", function () {
    const newPin = document.getElementById("new-pin").value;
    if (newPin.length === 5) {
        accounts[currentAccount].pin = newPin;
        alert("PIN successfully changed");
        document.getElementById("pin-change-section").style.display = "none";
    } else {
        alert("Please enter a 5-digit PIN");
    }
});

// Logout
document.getElementById("logout").addEventListener("click", function () {
    currentAccount = null;
    document.getElementById("login").style.display = "block";
    document.getElementById("atm-dashboard").style.display = "none";
});

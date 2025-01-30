// Show balance
document.getElementById("balance").addEventListener("click", function () {
    document.getElementById("display-balance").style.display = "block";
    document.getElementById("display-balance").innerText = `Balance: ₹${accounts[currentAccount].balance}`;
});

// Withdraw money
document.getElementById("confirm-withdraw").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("withdraw-input").value);
    if (amount <= accounts[currentAccount].balance && amount > 0) {
        accounts[currentAccount].balance -= amount;
        accounts[currentAccount].transactions.push(`Withdrawn: ₹${amount}`);
        alert(`Successfully withdrew ₹${amount}`);
        document.getElementById("withdraw-amount").style.display = "none";
    } else {
        alert("Invalid withdrawal amount");
    }
});

// Deposit money
document.getElementById("confirm-deposit").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("deposit-input").value);
    if (amount > 0) {
        accounts[currentAccount].balance += amount;
        accounts[currentAccount].transactions.push(`Deposited: ₹${amount}`);
        alert(`Successfully deposited ₹${amount}`);
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

function processTransactions(transactions) {
    let finalBalance = 0, totalDeposits = 0, totalWithdrawals = 0;
    for (const tx of transactions) {
      if (tx.type === 'deposit') {
        finalBalance += tx.amount;
        totalDeposits += tx.amount;
      } else if (tx.type === 'withdrawal') {
        finalBalance -= tx.amount;
        totalWithdrawals += tx.amount;
      }
    }
    return { finalBalance, totalDeposits, totalWithdrawals };
  }
  
  const txs = [
    { type: 'deposit', amount: 100 },
    { type: 'withdrawal', amount: 40 },
    { type: 'deposit', amount: 60 }
  ];
  console.log(processTransactions(txs));
  
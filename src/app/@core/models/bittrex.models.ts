export class Dashboard {
    balances: Balance[];
    usdBtcMarket: Market;
    totalValue: number;
}

// Used to store the balances of a user
export class Balance {
    balance: number;
    currency: string;

    market?: Market;
    transactions?: Transaction[];

    totalSellValue?: number;
    totalBuyValue?: number;
    totalDepositValue?: number;
    totalWithdrawalValue?: number;
}

// Used to get the last 24 hour summary of an exchange
export class Market {
    last: number;
}

export class Transaction {
    currency: string;
    amount: number;
    totalPrice: number[];
    timestamp: Date;
    type: string;
}

export class BittrexErrorResponse {
    message: string;
    success: boolean;
    result: any;
}

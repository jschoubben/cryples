export class MarketSummaryOverview {
    usdMarkets: MarketSummary[];
    bitcoinMarkets: MarketSummary[];
}

// Used to get the last 24 hour summary of an exchange
export class MarketSummary {
    marketName: string;
    high: number;
    low: number;
    volume: number;
    last: number;
    baseVolume: number;
    timeStamp: Date;
    bid: number;
    ask: number;
    openBuyOrders: number;
    openSellOrders: number;
    prevDay: number;
    created: Date;
    displayMarketName?: boolean;
}

export class MarketHistoryOverview {
    usdMarkets: MarketHistory[];
    bitcoinMarkets: MarketHistory[];
}

// Used when the latest orders are requested
export class MarketHistory {
    id: number;
    timeStamp: Date;
    quantity: number;
    price: number;
    total: number;
    fillType: string;
    orderType: string;
}

// Order book for a given market
export class OrderBook {
    market: string;
    buy: SmallOrder[];
    sell: SmallOrder[];
}

// Small class to store the orderbook orders
export class SmallOrder {
    quantitiy: number;
    rate: number;
}

export class Ticker {
    bid: number;
    ask: number;
    last: number;
}

// Used to store the balances of a user
export class Balance {
    currency: string;
    balance: number;
    available: number;
    pending: number;
    cryptoAddress: string;
    requested: boolean;
    uuid?: string;
    currencyValue?: CurrencyValue;
    deposits?: HistoryTransaction[];
    withdrawals?: HistoryTransaction[];
    buyOrders?: HistoryOrder[];
    sellOrders?: HistoryOrder[];
    transactions?: Transaction[];
    investedValue?: CurrencyValue;
    totalBuyValue?: CurrencyValue;
    totalSellValue?: CurrencyValue;
    totalProfitValue?: CurrencyValue;
    currentValue?: CurrencyValue;
    usdMarket?: MarketSummary;
    btcMarket?: MarketSummary;
}

export class DepositAddress {
    currency: string;
    address: string;
}

// Details of an order (retrieved by uuid)
export class Order {
    accountId?: string;
    orderUuid: string;
    exchange: string;
    type: string;
    quantity: number;
    quantityRemaining: number;
    limit: number;
    reserved: number;
    reserveRemaining: number;
    commissionReserved: number;
    commissionReserveRemaining: number;
    commissionPaid: number;
    pricePerUnit?: number;
    opened: Date;
    isOpen: boolean;
    sentinel: string;
    cancelInitiated: boolean;
    immediateOrCancel: boolean;
    isConditional: boolean;
    condition: string;
    conditionTarget?: string;
    currencyValue?: CurrencyValue;
}

// Order created by the user himself (trade BTC for XLM...)
export class HistoryOrder {
    orderUuid: string;
    exchange: string;
    timeStamp: Date;
    orderType: string;
    limit: number;
    currency: string;
    quantity: number;
    quantityRemaining: number;
    commission: number;
    pricePerUnit?: number;
    isConditional: boolean;
    condition?: string;
    conditionTarget?: string;
    immediateOrCancel: boolean;
    price: number;
    currencyValue?: CurrencyValue;
}

// Transactions done by the user himself (deposits and withdrawals of USD)
export class HistoryTransaction {
    id: string;
    amount: number;
    currency: string;
    confirmations: number;
    lastUpdated: Date;
    txId: string;
    cryptoAddress: string;
    currencyValue?: CurrencyValue;
}

export class Transaction {
    type: TransactionType;
    amount: number;
    price: CurrencyValue;
    total: CurrencyValue;
}

export class CurrencyValue {
    usd: number;
    eur: number;

    constructor(usd?: number, eur?: number) {
        this.usd = usd || 0;
        this.eur = eur || 0;
    }

    add = (price: CurrencyValue, factor: number = 1) => {
        this.usd += price.usd * factor;
        this.eur += price.eur * factor;
    }

    subtract = (price: CurrencyValue, factor: number = 1) => {
        this.usd -= price.usd * factor;
        this.eur -= price.eur * factor;
    }

    percent = (price: CurrencyValue): number => {
        return (price.usd / this.usd);
    }

    multiply = (amount: number): CurrencyValue => {
        return new CurrencyValue(this.usd * amount, this.eur * amount);
    }
}

export class BittrexResponse {
    message: string;
    success: boolean;
    result: any;
}

export enum TransactionType {
    Deposit,
    Withdrawal,
    BuyOrder,
    SellOrder
}
export class Market {
    marketCurrency: string;
    baseCurrency: string;
    marketCurrencyLong: string;
    baseCurrencyLong: string;
    minTradeSize: number;
    marketName: string;
    isActive: boolean;
    created: Date;
}

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

export class MarketOverview {
    usdMarkets: MarketSummary[];
    bitcoinMarkets: MarketSummary[];
}

export class MarketHistory {
    id: number;
    timeStamp: Date;
    quantity: number;
    price: number;
    total: number;
    fillType: string;
    orderType: string;
}

export class Currency {
    currency: string;
    currencyLong: string;
    minConfirmation: number;
    txFee: number;
    isActive: boolean;
    coinType: string;
    baseAddress?: string;
}

export class OrderBook {
    buy: Order[];
    sell: Order[];
}

export class Order {
    quantitiy: number;
    rate: number;
}

export class Ticker {
    bid: number;
    ask: number;
    last: number;
}

export class Balance {
    currency: string;
    balance: number;
    available: number;
    pending: number;
    cryptoAddress: string;
    requested: boolean;
    uuid?: string;
    usdRate?: number;
}

export class DepositAddress {
    currency: string;
    address: string;
}

export class MarketOrder {
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
    price: number;
    pricePerUnit?: number;
    opened: Date;
    closed?: Date;
    isOpen: boolean;
    sentinel: string;
    cancelInitiated: boolean;
    immediateOrCancel: boolean;
    isConditional: boolean;
    condition: string;
    conditionTarget?: string;
}

export class MarketOrderHistory {
    orderUuid: string;
    exchange: string;
    timeStamp: Date;
    orderType: string;
    limit: number;
    quantity: number;
    quantityRemaining: number;
    commission: number;
    price: number;
    pricePerUnit?: number;
    isConditional: boolean;
    condition?: string;
    conditionTarget?: string;
    immediateOrCancel: boolean;
}

export class MarketTransactionHistory {
    paymentUuid: string;
    currency: string;
    amount: number;
    address: string;
    opened: Date;
    authorized: boolean;
    pendingPayment: boolean;
    txCost: number;
    txId?: string;
    canceled: boolean;
    invalidAddress: boolean;
}

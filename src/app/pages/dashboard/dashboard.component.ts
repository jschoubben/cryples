import { Component } from '@angular/core';
import { CryptoService } from '../../@core/data/crypto.service';
import { Balance, MarketSummary, MarketOverview } from '../../@core/models/bittrex.models';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    private balances: Balance[];
    private marketOverview: MarketOverview;
    private totalWalletValue: number = 0;

    constructor(private cryptoService: CryptoService) {
        cryptoService.getBalances().subscribe(
            // Successful responses call the first callback.
            (data) => {
                this.cryptoService.getMarkets().subscribe(
                    (dataM) => {
                        const btcUsdMarket = dataM.usdMarkets.filter(m => m.marketName.toLowerCase().endsWith('btc'))[0];
                        data.forEach(b => {
                            const usdMarket = dataM.usdMarkets.filter(m => m.marketName.toLowerCase().endsWith(b.currency.toLowerCase()))[0];
                            if (usdMarket) {
                                b.usdRate = usdMarket.last;
                            } else {
                                const btcMarket = dataM.bitcoinMarkets.filter(m => m.marketName.toLowerCase().endsWith(b.currency.toLowerCase()))[0];
                                b.usdRate = btcMarket.last * btcUsdMarket.last;
                            }
                            this.totalWalletValue += b.usdRate * b.available;
                        });
                        this.marketOverview = dataM;
                        this.balances = data;
                    },
                    errM => {
                        console.log(errM);
                    }
                );
            },
            // Errors will call this callback instead:
            err => {
                console.log(err);
            }
        );
    }
}

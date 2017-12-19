"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var crypto_service_1 = require("../../@core/data/crypto.service");
var DashboardComponent = (function () {
    function DashboardComponent(cryptoService) {
        var _this = this;
        this.cryptoService = cryptoService;
        cryptoService.getBalances().subscribe(
        // Successful responses call the first callback.
        function (data) {
            var currencies = data.map(function (b) {
                return { market: b.Currency };
            });
            _this.cryptoService.getMarkets().subscribe(function (dataM) {
                _this.markets = dataM;
                data.forEach(function (b) {
                    b.market = dataM.filter(function (m) { return m.MarketName === b.Currency; })[0];
                });
                _this.balances = data;
            }, function (errM) {
                console.log('Something went wrong!');
            });
        }, 
        // Errors will call this callback instead:
        function (err) {
            console.log('Something went wrong!');
        });
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ngx-dashboard',
            styleUrls: ['./dashboard.component.scss'],
            templateUrl: './dashboard.component.html',
        }),
        __metadata("design:paramtypes", [crypto_service_1.CryptoService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
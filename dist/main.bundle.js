webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/pages.module.ngfactory": [
		"../../../../../src/app/pages/pages.module.ngfactory.js",
		"pages.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_import_guard__ = __webpack_require__("../../../../../src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_module__ = __webpack_require__("../../../../../src/app/@core/data/data.module.ts");


var NB_CORE_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__data_data_module__["a" /* DataModule */].forRoot().providers,
];
var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_0__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/crypto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_module__ = __webpack_require__("../../../../../src/app/app-config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_bittrex_models__ = __webpack_require__("../../../../../src/app/@core/models/bittrex.models.ts");




var CryptoService = (function () {
    function CryptoService(http, config) {
        this.http = http;
        this.config = config;
        this.getMarkets = function () {
            return this.http.get(this.config.baseUrl + '/getMarkets').map(function (data) {
                var marketOverview = new __WEBPACK_IMPORTED_MODULE_3__models_bittrex_models__["a" /* MarketOverview */]();
                marketOverview.usdMarkets = data.filter(function (m) { return m.marketName.toLowerCase().startsWith('usd'); });
                marketOverview.bitcoinMarkets = data.filter(function (m) { return !m.marketName.toLowerCase().startsWith('usd'); });
                return marketOverview;
            });
        };
        this.getBalances = function () {
            return this.http.post(this.config.baseUrl + '/getBalances', this.config.apiconfig);
        };
    }
    return CryptoService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crypto_service__ = __webpack_require__("../../../../../src/app/@core/data/crypto.service.ts");


var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__state_service__["a" /* StateService */],
    __WEBPACK_IMPORTED_MODULE_1__crypto_service__["a" /* CryptoService */]
];
var DataModule = (function () {
    function DataModule() {
    }
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule,
            providers: SERVICES.slice()
        };
    };
    return DataModule;
}());



/***/ }),

/***/ "../../../../../src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");



var StateService = (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    return StateService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/models/bittrex.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Market */
/* unused harmony export MarketSummary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketOverview; });
/* unused harmony export MarketHistory */
/* unused harmony export Currency */
/* unused harmony export OrderBook */
/* unused harmony export Order */
/* unused harmony export Ticker */
/* unused harmony export Balance */
/* unused harmony export DepositAddress */
/* unused harmony export MarketOrder */
/* unused harmony export MarketOrderHistory */
/* unused harmony export MarketTransactionHistory */
var Market = (function () {
    function Market() {
    }
    return Market;
}());

var MarketSummary = (function () {
    function MarketSummary() {
    }
    return MarketSummary;
}());

var MarketOverview = (function () {
    function MarketOverview() {
    }
    return MarketOverview;
}());

var MarketHistory = (function () {
    function MarketHistory() {
    }
    return MarketHistory;
}());

var Currency = (function () {
    function Currency() {
    }
    return Currency;
}());

var OrderBook = (function () {
    function OrderBook() {
    }
    return OrderBook;
}());

var Order = (function () {
    function Order() {
    }
    return Order;
}());

var Ticker = (function () {
    function Ticker() {
    }
    return Ticker;
}());

var Balance = (function () {
    function Balance() {
    }
    return Balance;
}());

var DepositAddress = (function () {
    function DepositAddress() {
    }
    return DepositAddress;
}());

var MarketOrder = (function () {
    function MarketOrder() {
    }
    return MarketOrder;
}());

var MarketOrderHistory = (function () {
    function MarketOrderHistory() {
    }
    return MarketOrderHistory;
}());

var MarketTransactionHistory = (function () {
    function MarketTransactionHistory() {
    }
    return MarketTransactionHistory;
}());



/***/ }),

/***/ "../../../../../src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");

var HeaderComponent = (function () {
    function HeaderComponent(sidebarService, menuService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_switcher_theme_switcher_component__ = __webpack_require__("../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__theme_switcher_theme_switcher_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");

var ThemeSwitcherComponent = (function () {
    function ThemeSwitcherComponent(themeService) {
        this.themeService = themeService;
        themeService.changeTheme(localStorage.getItem('DEFAULT_THEME') || 'default');
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) {
            _this.theme = theme;
        });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        localStorage.setItem('DEFAULT_THEME', this.boolToTheme(theme));
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return (theme || { name: 'cosmic' }).name === 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });





/***/ }),

/***/ "../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
// TODO: move layouts into the framework
var OneColumnLayoutComponent = (function () {
    function OneColumnLayoutComponent() {
    }
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = (function () {
    function ThreeColumnsLayoutComponent() {
    }
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = (function () {
    function TwoColumnsLayoutComponent() {
    }
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    return CapitalizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });






/***/ }),

/***/ "../../../../../src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    return PluralPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    return TimingPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.dark.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DARK_THEME; });
var DARK_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.light.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIGHT_THEME; });
var LIGHT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "../../../../../src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("../../../../../src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes__ = __webpack_require__("../../../../../src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts__ = __webpack_require__("../../../../../src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_theme_light__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.light.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_theme_dark__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.dark.ts");









var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* ReactiveFormsModule */]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["b" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["d" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["i" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["f" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["k" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["g" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["c" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__components__["c" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__layouts__["a" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_6__layouts__["b" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_6__layouts__["c" /* TwoColumnsLayoutComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_5__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_5__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_5__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_5__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["j" /* NbThemeModule */].forRoot({
    name: localStorage.getItem('DEFAULT_THEME') || 'default',
}, [__WEBPACK_IMPORTED_MODULE_7__styles_theme_light__["a" /* LIGHT_THEME */], __WEBPACK_IMPORTED_MODULE_8__styles_theme_dark__["a" /* DARK_THEME */]]).providers.concat(__WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */].forRoot().providers);
var ThemeModule = (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    return ThemeModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* unused harmony export AppConfig */
/* unused harmony export ApiConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_DI_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AppConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* InjectionToken */]('app.config');
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

var ApiConfig = (function () {
    function ApiConfig() {
    }
    return ApiConfig;
}());

var APP_DI_CONFIG = {
    baseUrl: '/api',
    apiconfig: {
        key: localStorage.getItem('APIKEY'),
        secret: localStorage.getItem('APISECRET')
    }
};
var AppConfigModule = (function () {
    function AppConfigModule() {
    }
    return AppConfigModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



var styles_AppComponent = [];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ngx-app", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], [], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ngx-app", __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng_bootstrap_ng_bootstrap_alert_alert_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ng_bootstrap_ng_bootstrap_tooltip_tooltip_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ng_bootstrap_ng_bootstrap_typeahead_typeahead_window_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng_bootstrap_ng_bootstrap_datepicker_datepicker_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ng_bootstrap_ng_bootstrap_modal_modal_backdrop_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ng_bootstrap_ng_bootstrap_modal_modal_window_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ng_bootstrap_ng_bootstrap_popover_popover_ngfactory__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_nebular_theme_components_search_search_component_ngfactory__ = __webpack_require__("../../../../@nebular/theme/components/search/search.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component_ngfactory__ = __webpack_require__("../../../../../src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__ = __webpack_require__("../../../animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap_modal_modal_stack__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap_alert_alert_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap_accordion_accordion_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ng_bootstrap_ng_bootstrap_carousel_carousel_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap_pagination_pagination_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ng_bootstrap_ng_bootstrap_popover_popover_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ng_bootstrap_ng_bootstrap_rating_rating_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ng_bootstrap_ng_bootstrap_tabset_tabset_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__nebular_theme_components_search_search_service__ = __webpack_require__("../../../../@nebular/theme/components/search/search.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__nebular_theme_services_js_themes_registry_service__ = __webpack_require__("../../../../@nebular/theme/services/js-themes-registry.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__ = __webpack_require__("../../../../@nebular/theme/theme.options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__nebular_theme_services_breakpoints_service__ = __webpack_require__("../../../../@nebular/theme/services/breakpoints.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__nebular_theme_services_theme_service__ = __webpack_require__("../../../../@nebular/theme/services/theme.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__nebular_theme_services_spinner_service__ = __webpack_require__("../../../../@nebular/theme/services/spinner.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__nebular_theme_components_sidebar_sidebar_service__ = __webpack_require__("../../../../@nebular/theme/components/sidebar/sidebar.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__nebular_theme_components_menu_menu_service__ = __webpack_require__("../../../../@nebular/theme/components/menu/menu.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__core_data_crypto_service__ = __webpack_require__("../../../../../src/app/@core/data/crypto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__app_config_module__ = __webpack_require__("../../../../../src/app/app-config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ng_bootstrap_ng_bootstrap_alert_alert_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ng_bootstrap_ng_bootstrap_buttons_buttons_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ng_bootstrap_ng_bootstrap_collapse_collapse_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ng_bootstrap_ng_bootstrap_accordion_accordion_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ng_bootstrap_ng_bootstrap_carousel_carousel_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ng_bootstrap_ng_bootstrap_modal_modal_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ng_bootstrap_ng_bootstrap_pagination_pagination_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ng_bootstrap_ng_bootstrap_popover_popover_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ng_bootstrap_ng_bootstrap_rating_rating_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ng_bootstrap_ng_bootstrap_tabset_tabset_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ng_bootstrap_ng_bootstrap_index__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__nebular_theme_components_shared_shared_module__ = __webpack_require__("../../../../@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__nebular_theme_components_card_card_module__ = __webpack_require__("../../../../@nebular/theme/components/card/card.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__nebular_theme_components_layout_layout_module__ = __webpack_require__("../../../../@nebular/theme/components/layout/layout.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__nebular_theme_components_tabset_tabset_module__ = __webpack_require__("../../../../@nebular/theme/components/tabset/tabset.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__nebular_theme_components_route_tabset_route_tabset_module__ = __webpack_require__("../../../../@nebular/theme/components/route-tabset/route-tabset.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__nebular_theme_components_menu_menu_module__ = __webpack_require__("../../../../@nebular/theme/components/menu/menu.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__nebular_theme_components_user_user_module__ = __webpack_require__("../../../../@nebular/theme/components/user/user.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__nebular_theme_components_actions_actions_module__ = __webpack_require__("../../../../@nebular/theme/components/actions/actions.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__nebular_theme_components_search_search_module__ = __webpack_require__("../../../../@nebular/theme/components/search/search.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__nebular_theme_components_sidebar_sidebar_module__ = __webpack_require__("../../../../@nebular/theme/components/sidebar/sidebar.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__nebular_theme_components_checkbox_checkbox_module__ = __webpack_require__("../../../../@nebular/theme/components/checkbox/checkbox.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__core_core_module__ = __webpack_require__("../../../../../src/app/@core/core.module.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
















































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__node_modules_ng_bootstrap_ng_bootstrap_alert_alert_ngfactory__["a" /* NgbAlertNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ng_bootstrap_ng_bootstrap_tooltip_tooltip_ngfactory__["a" /* NgbTooltipWindowNgFactory */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ng_bootstrap_ng_bootstrap_typeahead_typeahead_window_ngfactory__["a" /* NgbTypeaheadWindowNgFactory */], __WEBPACK_IMPORTED_MODULE_6__node_modules_ng_bootstrap_ng_bootstrap_datepicker_datepicker_ngfactory__["a" /* NgbDatepickerNgFactory */], __WEBPACK_IMPORTED_MODULE_7__node_modules_ng_bootstrap_ng_bootstrap_modal_modal_backdrop_ngfactory__["a" /* NgbModalBackdropNgFactory */], __WEBPACK_IMPORTED_MODULE_8__node_modules_ng_bootstrap_ng_bootstrap_modal_modal_window_ngfactory__["a" /* NgbModalWindowNgFactory */], __WEBPACK_IMPORTED_MODULE_9__node_modules_ng_bootstrap_ng_bootstrap_popover_popover_ngfactory__["a" /* NgbPopoverWindowNgFactory */], __WEBPACK_IMPORTED_MODULE_10__node_modules_nebular_theme_components_search_search_component_ngfactory__["a" /* NbSearchFieldComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_12__angular_common__["n" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["s" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["r" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["g" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["o" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["p" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Meta */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Meta */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["i" /* Title */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["i" /* Title */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["m" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* PLATFORM_ID */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["k" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["n" /* ɵh */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["n" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["l" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["n" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["j" /* ɵd */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["j" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["i" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["j" /* ɵd */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["g" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["g" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["i" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["g" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["o" /* ɵinterceptingHandler */], [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpBackend */], [2, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_18__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["x" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_router__["e" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["e" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_18__angular_router__["g" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_18__angular_router__["e" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_18__angular_router__["p" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["p" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["g" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_router__["f" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["f" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_18__angular_router__["i" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["A" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_18__angular_router__["y" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_18__angular_router__["i" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_forms__["q" /* ɵi */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["q" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap_modal_modal_stack__["a" /* NgbModalStack */], __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap_modal_modal_stack__["a" /* NgbModalStack */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap_modal_modal_stack__["a" /* NgbModalStack */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap_alert_alert_config__["a" /* NgbAlertConfig */], __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap_alert_alert_config__["a" /* NgbAlertConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_23__ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__["a" /* NgbProgressbarConfig */], __WEBPACK_IMPORTED_MODULE_23__ng_bootstrap_ng_bootstrap_progressbar_progressbar_config__["a" /* NgbProgressbarConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__["a" /* NgbTooltipConfig */], __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap_tooltip_tooltip_config__["a" /* NgbTooltipConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__["a" /* NgbTypeaheadConfig */], __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap_typeahead_typeahead_config__["a" /* NgbTypeaheadConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap_accordion_accordion_config__["a" /* NgbAccordionConfig */], __WEBPACK_IMPORTED_MODULE_26__ng_bootstrap_ng_bootstrap_accordion_accordion_config__["a" /* NgbAccordionConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_27__ng_bootstrap_ng_bootstrap_carousel_carousel_config__["a" /* NgbCarouselConfig */], __WEBPACK_IMPORTED_MODULE_27__ng_bootstrap_ng_bootstrap_carousel_carousel_config__["a" /* NgbCarouselConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__["a" /* NgbCalendar */], __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap_datepicker_ngb_calendar__["b" /* NgbCalendarGregorian */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__["a" /* NgbDatepickerI18n */], __WEBPACK_IMPORTED_MODULE_29__ng_bootstrap_ng_bootstrap_datepicker_datepicker_i18n__["b" /* NgbDatepickerI18nDefault */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_30__ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__["b" /* NgbDateParserFormatter */], __WEBPACK_IMPORTED_MODULE_30__ng_bootstrap_ng_bootstrap_datepicker_ngb_date_parser_formatter__["a" /* NgbDateISOParserFormatter */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__["a" /* NgbDatepickerConfig */], __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap_datepicker_datepicker_config__["a" /* NgbDatepickerConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_32__ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__["a" /* NgbDropdownConfig */], __WEBPACK_IMPORTED_MODULE_32__ng_bootstrap_ng_bootstrap_dropdown_dropdown_config__["a" /* NgbDropdownConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap_pagination_pagination_config__["a" /* NgbPaginationConfig */], __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap_pagination_pagination_config__["a" /* NgbPaginationConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_34__ng_bootstrap_ng_bootstrap_popover_popover_config__["a" /* NgbPopoverConfig */], __WEBPACK_IMPORTED_MODULE_34__ng_bootstrap_ng_bootstrap_popover_popover_config__["a" /* NgbPopoverConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_35__ng_bootstrap_ng_bootstrap_rating_rating_config__["a" /* NgbRatingConfig */], __WEBPACK_IMPORTED_MODULE_35__ng_bootstrap_ng_bootstrap_rating_rating_config__["a" /* NgbRatingConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_36__ng_bootstrap_ng_bootstrap_tabset_tabset_config__["a" /* NgbTabsetConfig */], __WEBPACK_IMPORTED_MODULE_36__ng_bootstrap_ng_bootstrap_tabset_tabset_config__["a" /* NgbTabsetConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_37__ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__["a" /* NgbTimepickerConfig */], __WEBPACK_IMPORTED_MODULE_37__ng_bootstrap_ng_bootstrap_timepicker_timepicker_config__["a" /* NgbTimepickerConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_38__nebular_theme_components_search_search_service__["a" /* NbSearchService */], __WEBPACK_IMPORTED_MODULE_38__nebular_theme_components_search_search_service__["a" /* NbSearchService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_39__nebular_theme_services_js_themes_registry_service__["b" /* NbJSThemesRegistry */], __WEBPACK_IMPORTED_MODULE_39__nebular_theme_services_js_themes_registry_service__["b" /* NbJSThemesRegistry */], [__WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["a" /* nbBuiltInJSThemesToken */], __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["b" /* nbJSThemesToken */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_41__nebular_theme_services_breakpoints_service__["b" /* NbMediaBreakpointsService */], __WEBPACK_IMPORTED_MODULE_41__nebular_theme_services_breakpoints_service__["b" /* NbMediaBreakpointsService */], [__WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["c" /* nbMediaBreakpointsToken */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_42__nebular_theme_services_theme_service__["a" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_42__nebular_theme_services_theme_service__["a" /* NbThemeService */], [__WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["d" /* nbThemeOptionsToken */], __WEBPACK_IMPORTED_MODULE_41__nebular_theme_services_breakpoints_service__["b" /* NbMediaBreakpointsService */], __WEBPACK_IMPORTED_MODULE_39__nebular_theme_services_js_themes_registry_service__["b" /* NbJSThemesRegistry */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_43__nebular_theme_services_spinner_service__["a" /* NbSpinnerService */], __WEBPACK_IMPORTED_MODULE_43__nebular_theme_services_spinner_service__["a" /* NbSpinnerService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_44__nebular_theme_components_sidebar_sidebar_service__["a" /* NbSidebarService */], __WEBPACK_IMPORTED_MODULE_44__nebular_theme_components_sidebar_sidebar_service__["a" /* NbSidebarService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_45__nebular_theme_components_menu_menu_service__["b" /* NbMenuService */], __WEBPACK_IMPORTED_MODULE_45__nebular_theme_components_menu_menu_service__["b" /* NbMenuService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_45__nebular_theme_components_menu_menu_service__["a" /* NbMenuInternalService */], __WEBPACK_IMPORTED_MODULE_45__nebular_theme_components_menu_menu_service__["a" /* NbMenuInternalService */], [__WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_46__core_data_state_service__["a" /* StateService */], __WEBPACK_IMPORTED_MODULE_46__core_data_state_service__["a" /* StateService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_47__core_data_crypto_service__["a" /* CryptoService */], __WEBPACK_IMPORTED_MODULE_47__core_data_crypto_service__["a" /* CryptoService */], [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_48__app_config_module__["a" /* APP_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["q" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgProbeToken */], function () { return [__WEBPACK_IMPORTED_MODULE_18__angular_router__["t" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_router__["y" /* ɵg */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["y" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["t" /* ɵh */](p0_0), __WEBPACK_IMPORTED_MODULE_18__angular_router__["z" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgProbeToken */]], __WEBPACK_IMPORTED_MODULE_18__angular_router__["y" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_18__angular_router__["s" /* ɵa */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["v" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_router__["r" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* APP_BASE_HREF */], "/", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_18__angular_router__["h" /* ROUTER_CONFIGURATION */], { useHash: true }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* LocationStrategy */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["u" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["q" /* PlatformLocation */], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* APP_BASE_HREF */]], __WEBPACK_IMPORTED_MODULE_18__angular_router__["h" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* LocationStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* SystemJsNgModuleLoader */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* SystemJsNgModuleLoaderConfig */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_18__angular_router__["j" /* ROUTES */], function () { return [[{ path: "pages", loadChildren: "app/pages/pages.module#PagesModule" }, { path: "", redirectTo: "pages", pathMatch: "full" }, { path: "**", redirectTo: "pages" }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["w" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["r" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["j" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["h" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_18__angular_router__["q" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_18__angular_router__["k" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_router__["n" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["n" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_18__angular_router__["s" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_18__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_49__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_49__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_48__app_config_module__["c" /* AppConfigModule */], __WEBPACK_IMPORTED_MODULE_48__app_config_module__["c" /* AppConfigModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_50__ng_bootstrap_ng_bootstrap_alert_alert_module__["a" /* NgbAlertModule */], __WEBPACK_IMPORTED_MODULE_50__ng_bootstrap_ng_bootstrap_alert_alert_module__["a" /* NgbAlertModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_51__ng_bootstrap_ng_bootstrap_buttons_buttons_module__["a" /* NgbButtonsModule */], __WEBPACK_IMPORTED_MODULE_51__ng_bootstrap_ng_bootstrap_buttons_buttons_module__["a" /* NgbButtonsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_52__ng_bootstrap_ng_bootstrap_collapse_collapse_module__["a" /* NgbCollapseModule */], __WEBPACK_IMPORTED_MODULE_52__ng_bootstrap_ng_bootstrap_collapse_collapse_module__["a" /* NgbCollapseModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_53__ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__["a" /* NgbProgressbarModule */], __WEBPACK_IMPORTED_MODULE_53__ng_bootstrap_ng_bootstrap_progressbar_progressbar_module__["a" /* NgbProgressbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_54__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__["a" /* NgbTooltipModule */], __WEBPACK_IMPORTED_MODULE_54__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__["a" /* NgbTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_55__ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__["a" /* NgbTypeaheadModule */], __WEBPACK_IMPORTED_MODULE_55__ng_bootstrap_ng_bootstrap_typeahead_typeahead_module__["a" /* NgbTypeaheadModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_56__ng_bootstrap_ng_bootstrap_accordion_accordion_module__["a" /* NgbAccordionModule */], __WEBPACK_IMPORTED_MODULE_56__ng_bootstrap_ng_bootstrap_accordion_accordion_module__["a" /* NgbAccordionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_57__ng_bootstrap_ng_bootstrap_carousel_carousel_module__["a" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_57__ng_bootstrap_ng_bootstrap_carousel_carousel_module__["a" /* NgbCarouselModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_forms__["o" /* ɵba */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["o" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["e" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_58__ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__["a" /* NgbDatepickerModule */], __WEBPACK_IMPORTED_MODULE_58__ng_bootstrap_ng_bootstrap_datepicker_datepicker_module__["a" /* NgbDatepickerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_59__ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__["a" /* NgbDropdownModule */], __WEBPACK_IMPORTED_MODULE_59__ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__["a" /* NgbDropdownModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_60__ng_bootstrap_ng_bootstrap_modal_modal_module__["a" /* NgbModalModule */], __WEBPACK_IMPORTED_MODULE_60__ng_bootstrap_ng_bootstrap_modal_modal_module__["a" /* NgbModalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_61__ng_bootstrap_ng_bootstrap_pagination_pagination_module__["a" /* NgbPaginationModule */], __WEBPACK_IMPORTED_MODULE_61__ng_bootstrap_ng_bootstrap_pagination_pagination_module__["a" /* NgbPaginationModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_62__ng_bootstrap_ng_bootstrap_popover_popover_module__["a" /* NgbPopoverModule */], __WEBPACK_IMPORTED_MODULE_62__ng_bootstrap_ng_bootstrap_popover_popover_module__["a" /* NgbPopoverModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_63__ng_bootstrap_ng_bootstrap_rating_rating_module__["a" /* NgbRatingModule */], __WEBPACK_IMPORTED_MODULE_63__ng_bootstrap_ng_bootstrap_rating_rating_module__["a" /* NgbRatingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_64__ng_bootstrap_ng_bootstrap_tabset_tabset_module__["a" /* NgbTabsetModule */], __WEBPACK_IMPORTED_MODULE_64__ng_bootstrap_ng_bootstrap_tabset_tabset_module__["a" /* NgbTabsetModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_65__ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__["a" /* NgbTimepickerModule */], __WEBPACK_IMPORTED_MODULE_65__ng_bootstrap_ng_bootstrap_timepicker_timepicker_module__["a" /* NgbTimepickerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_66__ng_bootstrap_ng_bootstrap_index__["b" /* NgbRootModule */], __WEBPACK_IMPORTED_MODULE_66__ng_bootstrap_ng_bootstrap_index__["b" /* NgbRootModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_forms__["n" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["n" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_67__nebular_theme_components_shared_shared_module__["a" /* NbSharedModule */], __WEBPACK_IMPORTED_MODULE_67__nebular_theme_components_shared_shared_module__["a" /* NbSharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_68__nebular_theme_components_card_card_module__["a" /* NbCardModule */], __WEBPACK_IMPORTED_MODULE_68__nebular_theme_components_card_card_module__["a" /* NbCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_69__nebular_theme_components_layout_layout_module__["a" /* NbLayoutModule */], __WEBPACK_IMPORTED_MODULE_69__nebular_theme_components_layout_layout_module__["a" /* NbLayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_70__nebular_theme_components_tabset_tabset_module__["a" /* NbTabsetModule */], __WEBPACK_IMPORTED_MODULE_70__nebular_theme_components_tabset_tabset_module__["a" /* NbTabsetModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_71__nebular_theme_components_route_tabset_route_tabset_module__["a" /* NbRouteTabsetModule */], __WEBPACK_IMPORTED_MODULE_71__nebular_theme_components_route_tabset_route_tabset_module__["a" /* NbRouteTabsetModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_72__nebular_theme_components_menu_menu_module__["a" /* NbMenuModule */], __WEBPACK_IMPORTED_MODULE_72__nebular_theme_components_menu_menu_module__["a" /* NbMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_73__nebular_theme_components_user_user_module__["a" /* NbUserModule */], __WEBPACK_IMPORTED_MODULE_73__nebular_theme_components_user_user_module__["a" /* NbUserModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_74__nebular_theme_components_actions_actions_module__["a" /* NbActionsModule */], __WEBPACK_IMPORTED_MODULE_74__nebular_theme_components_actions_actions_module__["a" /* NbActionsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_75__nebular_theme_components_search_search_module__["a" /* NbSearchModule */], __WEBPACK_IMPORTED_MODULE_75__nebular_theme_components_search_search_module__["a" /* NbSearchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_76__nebular_theme_components_sidebar_sidebar_module__["a" /* NbSidebarModule */], __WEBPACK_IMPORTED_MODULE_76__nebular_theme_components_sidebar_sidebar_module__["a" /* NbSidebarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_77__nebular_theme_components_checkbox_checkbox_module__["a" /* NbCheckboxModule */], __WEBPACK_IMPORTED_MODULE_77__nebular_theme_components_checkbox_checkbox_module__["a" /* NbCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_66__ng_bootstrap_ng_bootstrap_index__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_66__ng_bootstrap_ng_bootstrap_index__["a" /* NgbModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_78__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_78__theme_theme_module__["a" /* ThemeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_79__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_79__core_core_module__["a" /* CoreModule */], [[3, __WEBPACK_IMPORTED_MODULE_79__core_core_module__["a" /* CoreModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["k" /* ɵe */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["l" /* ɵf */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_48__app_config_module__["a" /* APP_CONFIG */], __WEBPACK_IMPORTED_MODULE_48__app_config_module__["b" /* APP_DI_CONFIG */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["d" /* nbThemeOptionsToken */], {}, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["a" /* nbBuiltInJSThemesToken */], __WEBPACK_IMPORTED_MODULE_39__nebular_theme_services_js_themes_registry_service__["a" /* BUILT_IN_THEMES */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["b" /* nbJSThemesToken */], [{ name: "default", base: null, variables: { temperature: ["#42db7d", "#42db7d", "#42db7d", "#42db7d", "#42db7d"], solar: { gradientLeft: "#42db7d", gradientRight: "#42db7d", shadowColor: "rgba(0, 0, 0, 0)", radius: ["80%", "90%"] }, traffic: { colorBlack: "#000000", tooltipBg: "#ffffff", tooltipBorderColor: "#c0c8d1", tooltipExtraCss: "border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#2a2a2a", tooltipFontWeight: "bolder", lineBg: "#c0c8d1", lineShadowBlur: "1", itemColor: "#bcc3cc", itemBorderColor: "#bcc3cc", itemEmphasisBorderColor: "#42db7d", shadowLineDarkBg: "rgba(0, 0, 0, 0)", shadowLineShadow: "rgba(0, 0, 0, 0)", gradFrom: "#ebeef2", gradTo: "#ebeef2" }, electricity: { tooltipBg: "#ffffff", tooltipLineColor: "rgba(0, 0, 0, 0)", tooltipLineWidth: "0", tooltipBorderColor: "#ebeef2", tooltipExtraCss: "border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#2a2a2a", tooltipFontWeight: "bolder", axisLineColor: "rgba(0, 0, 0, 0)", xAxisTextColor: "#2a2a2a", yAxisSplitLine: "#ebeef2", itemBorderColor: "#42db7d", lineStyle: "solid", lineWidth: "4", lineGradFrom: "#42db7d", lineGradTo: "#42db7d", lineShadow: "rgba(0, 0, 0, 0)", areaGradFrom: "rgba(235, 238, 242, 0.5)", areaGradTo: "rgba(235, 238, 242, 0.5)", shadowLineDarkBg: "rgba(0, 0, 0, 0)" }, bubbleMap: { titleColor: "#484848", areaColor: "#dddddd", areaHoverColor: "#cccccc", areaBorderColor: "#ebeef2" }, echarts: { bg: "#ffffff", textColor: "#484848", axisLineColor: "#bbbbbb", splitLineColor: "#ebeef2", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#6a7985", areaOpacity: "0.7" }, chartjs: { axisLineColor: "#cccccc", textColor: "#484848" } } }, { name: "cosmic", base: "default", variables: { temperature: ["#2ec7fe", "#31ffad", "#7bff24", "#fff024", "#f7bd59"], solar: { gradientLeft: "#7bff24", gradientRight: "#2ec7fe", shadowColor: "#19977E", radius: ["70%", "90%"] }, traffic: { colorBlack: "#000000", tooltipBg: "rgba(0, 255, 170, 0.35)", tooltipBorderColor: "#00d977", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", lineBg: "#d1d1ff", lineShadowBlur: "14", itemColor: "#BEBBFF", itemBorderColor: "#ffffff", itemEmphasisBorderColor: "#ffffff", shadowLineDarkBg: "#655ABD", shadowLineShadow: "rgba(33, 7, 77, 0.5)", gradFrom: "rgba(118, 89, 255, 0.4)", gradTo: "rgba(164, 84, 255, 0.5)" }, electricity: { tooltipBg: "rgba(0, 255, 170, 0.35)", tooltipLineColor: "rgba(255, 255, 255, 0.1)", tooltipLineWidth: "1", tooltipBorderColor: "#00d977", tooltipExtraCss: "box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;", tooltipTextColor: "#ffffff", tooltipFontWeight: "normal", axisLineColor: "rgba(161, 161 ,229, 0.3)", xAxisTextColor: "#a1a1e5", yAxisSplitLine: "rgba(161, 161 ,229, 0.2)", itemBorderColor: "#ffffff", lineStyle: "dotted", lineWidth: "6", lineGradFrom: "#00ffaa", lineGradTo: "#fff835", lineShadow: "rgba(14, 16, 48, 0.4)", areaGradFrom: "rgba(188, 92, 255, 0.5)", areaGradTo: "rgba(188, 92, 255, 0)", shadowLineDarkBg: "#a695ff" }, bubbleMap: { titleColor: "#ffffff", areaColor: "#2c2961", areaHoverColor: "#a1a1e5", areaBorderColor: "#654ddb" }, echarts: { bg: "#3d3780", textColor: "#ffffff", axisLineColor: "#a1a1e5", splitLineColor: "#342e73", itemHoverShadowColor: "rgba(0, 0, 0, 0.5)", tooltipBackgroundColor: "#6a7985", areaOpacity: "1" }, chartjs: { axisLineColor: "#a1a1e5", textColor: "#ffffff" } } }], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_40__nebular_theme_theme_options__["c" /* nbMediaBreakpointsToken */], __WEBPACK_IMPORTED_MODULE_41__nebular_theme_services_breakpoints_service__["a" /* DEFAULT_MEDIA_BREAKPOINTS */], [])]); });



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("../../../../../src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
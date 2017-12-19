webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/configure/configure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xxxl-12\">\r\n    <h1>Configuration</h1>\r\n    <nb-card>\r\n      <nb-card-header>API settings</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"alert alert-primary\">Your keys will be stored in\r\n          <b>local storage</b>.</div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Key\" class=\"form-control\" name=\"apikey\" [(ngModel)]=\"apikey\" (ngModelChange)=\"saveKey($event)\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Secret\" class=\"form-control\" name=\"apisecret\" [(ngModel)]=\"apisecret\" (ngModelChange)=\"saveSecret($event)\" />\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <nb-card>\r\n      <nb-card-header>Theme options</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-theme-switcher></ngx-theme-switcher>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/configure/configure.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/configure/configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigureComponent = (function () {
    function ConfigureComponent(router) {
        this.router = router;
        this.saveKey = function (value) {
            localStorage.setItem('APIKEY', value || this.apikey);
        };
        this.saveSecret = function (value) {
            localStorage.setItem('APISECRET', value || this.apisecret);
        };
        this.apikey = localStorage.getItem('APIKEY');
        this.apisecret = localStorage.getItem('APISECRET');
    }
    ConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-configure',
            styles: [__webpack_require__("../../../../../src/app/pages/configure/configure.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/configure/configure.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ConfigureComponent);
    return ConfigureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/configure/configure.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configure_component__ = __webpack_require__("../../../../../src/app/pages/configure/configure.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigureModule = (function () {
    function ConfigureModule() {
    }
    ConfigureModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configure_component__["a" /* ConfigureComponent */]
            ],
        })
    ], ConfigureModule);
    return ConfigureModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/balance-list/balance-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xxl-6 col-xl-12\" *ngFor=\"let balance of balances\">\r\n        <nb-card>\r\n            <div class=\"icon-container\">\r\n                <div class=\"icon\" [ngClass]=\"{'danger': !balance.valueUp, 'success': balance.valueUp}\">\r\n                    <i class=\"cf cf-{{ balance.currency | lowercase }}\"></i>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"details\">\r\n                <div class=\"title\">\r\n                    {{ balance.currency }}\r\n                </div>\r\n                <div class=\"status\">\r\n                    {{ balance.available }}\r\n                </div>\r\n                <div class=\"status\">\r\n                    {{ balance.pending }}\r\n                </div>\r\n                <div class=\"status\">\r\n                    {{ balance.usdRate * balance.available | currency:'USD' }}\r\n                </div>\r\n            </div>\r\n        </nb-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/balance-list/balance-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    padding: 12px 20px;\n    background-image: linear-gradient(to right, #b57fff, #8a7fff);\n    box-shadow: 0 0 0 0 #896ddb, 0 0 0 0 #9f7fff;\n    text-shadow: none;\n    border: none;\n    line-height: calc((1rem * 1.25) + 4px); }\n    :host-context(.nb-theme-default) nb-card .icon:focus,\n    :host-context(.nb-theme-default) nb-card .icon .focus {\n      background-image: linear-gradient(to right, #bf91ff, #9a91ff); }\n    :host-context(.nb-theme-default) nb-card .icon:hover,\n    :host-context(.nb-theme-default) nb-card .icon .hover {\n      background-image: linear-gradient(to right, #bf91ff, #9a91ff); }\n    :host-context(.nb-theme-default) nb-card .icon:active,\n    :host-context(.nb-theme-default) nb-card .icon .active {\n      background-image: linear-gradient(to right, #9b6ddb, #776ddb);\n      box-shadow: none;\n      border-color: transparent; }\n    :host-context(.nb-theme-default) nb-card .icon:disabled {\n      opacity: 0.3;\n      box-shadow: none; }\n    :host-context(.nb-theme-default) nb-card .icon.btn.btn-lg {\n      line-height: calc((1.125rem * 1.25) + 4px); }\n    :host-context(.nb-theme-default) nb-card .icon.btn.btn-md {\n      line-height: calc((1rem * 1.25) + 4px); }\n    :host-context(.nb-theme-default) nb-card .icon.btn.btn-sm {\n      line-height: calc((0.875rem * 1.25) + 4px); }\n    :host-context(.nb-theme-default) nb-card .icon.btn.btn-tn {\n      line-height: calc((0.75rem * 1.25) + 4px); }\n    :host-context(.nb-theme-default) nb-card .icon.btn-pulse {\n      -webkit-animation: btn-hero-primary-pulse 1.5s infinite;\n      animation: btn-hero-primary-pulse 1.5s infinite; }\n\n@-webkit-keyframes btn-hero-primary-pulse {\n  0% {\n    box-shadow: none;\n    opacity: 0.3; }\n  50% {\n    box-shadow: 0 0 1rem 0 #8a7fff;\n    opacity: 0.8; }\n  100% {\n    box-shadow: none;\n    opacity: 0.3; } }\n\n@keyframes btn-hero-primary-pulse {\n  0% {\n    box-shadow: none;\n    opacity: 0.3; }\n  50% {\n    box-shadow: 0 0 1rem 0 #8a7fff;\n    opacity: 0.8; }\n  100% {\n    box-shadow: none;\n    opacity: 0.3; } }\n  :host-context(.nb-theme-default) nb-card:hover {\n    cursor: pointer; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    padding: 12px 20px;\n    background-image: linear-gradient(to right, #ad59ff, #7659ff);\n    box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33, 7, 77, 0.5);\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    border: none;\n    line-height: calc((1rem * 1.25) + 4px); }\n    :host-context(.nb-theme-cosmic) nb-card .icon:focus,\n    :host-context(.nb-theme-cosmic) nb-card .icon .focus {\n      background-image: linear-gradient(to right, #b970ff, #8970ff); }\n    :host-context(.nb-theme-cosmic) nb-card .icon:hover,\n    :host-context(.nb-theme-cosmic) nb-card .icon .hover {\n      background-image: linear-gradient(to right, #b970ff, #8970ff); }\n    :host-context(.nb-theme-cosmic) nb-card .icon:active,\n    :host-context(.nb-theme-cosmic) nb-card .icon .active {\n      background-image: linear-gradient(to right, #954ddb, #654ddb);\n      box-shadow: none;\n      border-color: transparent; }\n    :host-context(.nb-theme-cosmic) nb-card .icon:disabled {\n      opacity: 0.3;\n      box-shadow: none; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.btn.btn-lg {\n      line-height: calc((1.125rem * 1.25) + 4px); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.btn.btn-md {\n      line-height: calc((1rem * 1.25) + 4px); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.btn.btn-sm {\n      line-height: calc((0.875rem * 1.25) + 4px); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.btn.btn-tn {\n      line-height: calc((0.75rem * 1.25) + 4px); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.btn-pulse {\n      -webkit-animation: btn-hero-primary-pulse 1.5s infinite;\n      animation: btn-hero-primary-pulse 1.5s infinite; }\n\n@-webkit-keyframes btn-hero-primary-pulse {\n  0% {\n    box-shadow: none;\n    opacity: 0.3; }\n  50% {\n    box-shadow: 0 0 1rem 0 #7659ff;\n    opacity: 0.8; }\n  100% {\n    box-shadow: none;\n    opacity: 0.3; } }\n\n@keyframes btn-hero-primary-pulse {\n  0% {\n    box-shadow: none;\n    opacity: 0.3; }\n  50% {\n    box-shadow: 0 0 1rem 0 #7659ff;\n    opacity: 0.8; }\n  100% {\n    box-shadow: none;\n    opacity: 0.3; } }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    cursor: pointer; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/balance-list/balance-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BalanceListComponent = (function () {
    function BalanceListComponent() {
        this.ngOnInit = function () {
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BalanceListComponent.prototype, "balances", void 0);
    BalanceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-balances',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/balance-list/balance-list.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/balance-list/balance-list.component.html"),
        })
    ], BalanceListComponent);
    return BalanceListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "Total wallet value: {{totalWalletValue | currency:'USD'}}\n<ngx-balances [balances]=\"balances\"></ngx-balances>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_crypto_service__ = __webpack_require__("../../../../../src/app/@core/data/crypto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(cryptoService) {
        var _this = this;
        this.cryptoService = cryptoService;
        this.totalWalletValue = 0;
        cryptoService.getBalances().subscribe(
        // Successful responses call the first callback.
        function (data) {
            _this.cryptoService.getMarkets().subscribe(function (dataM) {
                var btcUsdMarket = dataM.usdMarkets.filter(function (m) { return m.marketName.toLowerCase().endsWith('btc'); })[0];
                data.forEach(function (b) {
                    var usdMarket = dataM.usdMarkets.filter(function (m) { return m.marketName.toLowerCase().endsWith(b.currency.toLowerCase()); })[0];
                    if (usdMarket) {
                        b.usdRate = usdMarket.last;
                    }
                    else {
                        var btcMarket = dataM.bitcoinMarkets.filter(function (m) { return m.marketName.toLowerCase().endsWith(b.currency.toLowerCase()); })[0];
                        b.usdRate = btcMarket.last * btcUsdMarket.last;
                    }
                    _this.totalWalletValue += b.usdRate * b.available;
                });
                _this.marketOverview = dataM;
                _this.balances = data;
            }, function (errM) {
                console.log(errM);
            });
        }, 
        // Errors will call this callback instead:
        function (err) {
            console.log(err);
        });
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-dashboard',
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_crypto_service__["a" /* CryptoService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balance_list_balance_list_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/balance-list/balance-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__balance_list_balance_list_component__["a" /* BalanceListComponent */],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    }, {
        title: 'Configuration',
        icon: 'nb-gear',
        link: '/pages/configure',
    }
];


/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configure_configure_component__ = __webpack_require__("../../../../../src/app/pages/configure/configure.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'configure',
                component: __WEBPACK_IMPORTED_MODULE_4__configure_configure_component__["a" /* ConfigureComponent */],
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-pages',
            template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configure_configure_module__ = __webpack_require__("../../../../../src/app/pages/configure/configure.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_4__configure_configure_module__["a" /* ConfigureModule */]
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map
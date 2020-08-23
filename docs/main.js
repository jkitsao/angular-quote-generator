(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "./src/app/components/quotes/quotes.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_2__["QuotesComponent"]], styles: [".active[_ngcontent-%COMP%]{\n    background-color: black;\n    color:white;\n    font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "./src/app/components/quotes/quotes.component.ts");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quote/quote.component */ "./src/app/components/quote/quote.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_addquote_addquote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addquote/addquote.component */ "./src/app/components/addquote/addquote.component.ts");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"],
        _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_addquote_addquote_component__WEBPACK_IMPORTED_MODULE_7__["AddquoteComponent"],
        _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"],
                    _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_addquote_addquote_component__WEBPACK_IMPORTED_MODULE_7__["AddquoteComponent"],
                    _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/addquote/addquote.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/addquote/addquote.component.ts ***!
  \***********************************************************/
/*! exports provided: AddquoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquoteComponent", function() { return AddquoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class AddquoteComponent {
    constructor() {
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.img = [2, 3, 4, 5];
    }
    getId() {
        let randomId = Math.random();
        return randomId;
    }
    getrandom() {
        let random = Math.floor(Math.random() * this.img.length);
        return random;
    }
    getUrl() {
        //  let random=Math.floor(Math.random()*1000)
        let randomUrl = `https://source.unsplash.com/collection/1907${this.img[this.getrandom()]}7/720x480`;
        return randomUrl;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.name && this.message != "") {
            const quote = {
                id: this.getId(),
                author: this.name,
                quote: this.message,
                upvote: 0,
                downvote: 0,
                created: Date.now(),
                bgimage: this.getUrl()
            };
            this.addQuote.emit(quote);
        }
        this.name = "cannot be empty write something please";
    }
}
AddquoteComponent.ɵfac = function AddquoteComponent_Factory(t) { return new (t || AddquoteComponent)(); };
AddquoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddquoteComponent, selectors: [["app-addquote"]], outputs: { addQuote: "addQuote" }, decls: 13, vars: 2, consts: [[1, "container", "flex", "justify-content-end", "my-4"], [1, "card", "shadow-lg", "px-4", "py-4", "bg-darken-1"], [1, "text-center", "py-2"], [3, "ngSubmit"], ["for", "name", 1, "text-success"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["for", "message", 1, "text-success"], ["id", "message", "cols", "30", "rows", "10", "placeholder", "add your quote", "name", "message", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit"]], template: function AddquoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add a new quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddquoteComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquoteComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddquoteComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["[type=text][_ngcontent-%COMP%], [type=email][_ngcontent-%COMP%], [type=url][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  display: block;\n  padding: .5rem;\n  background: transparent;\n  \n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #cdcdcd;\n  border-radius: 4px;\n  font-size: .95rem;\n  max-height: 5rem;\n}\n\n[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid #1E6BD6;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: .9rem;\n  display: block;\n  margin: .5rem 0;\n}\n\n\n\n*[_ngcontent-%COMP%] { box-sizing: border-box; }\n\nhtml[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n  padding: 1rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n\n\n[type=submit][_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: .25rem 0;\n  padding: .5rem 1rem;\n  border: 1px solid #1E6BD6;\n  border-radius: 18px;\n  background: #1E6BD6;\n  color: white;\n  font-weight: 600;\n  text-decoration: none;\n  font-family: sans-serif;\n  font-size: .95rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRxdW90ZS9hZGRxdW90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsVUFBVTs7QUFFVixJQUFJLHNCQUFzQixFQUFFOztBQUU1QjtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBR0EsV0FBVzs7QUFFWDtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZHF1b3RlL2FkZHF1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblt0eXBlPXRleHRdLFxuW3R5cGU9ZW1haWxdLFxuW3R5cGU9dXJsXSxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IC45NXJlbTtcbiAgbWF4LWhlaWdodDogNXJlbTtcbn1cblxuW3R5cGU9dGV4dF06Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRTZCRDY7XG59IFxuXG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogLjVyZW0gMDtcbn1cblxuLyogT3RoZXIgKi9cblxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuaHRtbCB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuXG4vKiBCdXR0b24gKi9cblxuW3R5cGU9c3VibWl0XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IC4yNXJlbSAwO1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMUU2QkQ2O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMUU2QkQ2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddquoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addquote',
                templateUrl: './addquote.component.html',
                styleUrls: ['./addquote.component.css']
            }]
    }], function () { return []; }, { addQuote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "py-4", "bg-dark"], ["href", "#", 1, "navbar-brand", "text-primary", "text-uppercase"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "getQuotes.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/quote/quote.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/quote/quote.component.ts ***!
  \*****************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");



class QuoteComponent {
    constructor() {
        this.deleteQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleUpvote() {
        this.quote.upvote += 1;
    }
    handleDownvote() {
        this.quote.downvote += 1;
    }
    delete(quote) {
        this.deleteQuote.emit(quote);
    }
    ngOnInit() {
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], inputs: { quote: "quote" }, outputs: { deleteQuote: "deleteQuote" }, decls: 29, vars: 12, consts: [[1, "pad"], [1, "card-1"], [1, "card_image"], [3, "src"], [1, "overlay"], [1, "card_title", "title-white", "py3"], [1, ""], [1, "author-text"], [1, "quote-text"], [1, "flex-badges"], [1, "text-light", "px-2", "badge-pill", "bg-success", 3, "click"], [1, "text-light", "badge-pill", "bg-info", "px-2", 3, "click"], [1, "flex", "justify-content-between", "mt-4", "align-bottom"], [1, "right-0", "badge-pill", "p-2", "bg-blood", "ml-5", 3, "click"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_Template_span_click_17_listener() { return ctx.handleUpvote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "upvote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_Template_span_click_21_listener() { return ctx.handleDownvote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "dateAgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_Template_span_click_27_listener() { return ctx.delete(ctx.quote); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.quote.bgimage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quote: \"", " ", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.quote.quote, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author:", " ", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quote.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quote.upvote, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" downvote", " ", "", ctx.quote.downvote, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" posted ", " ", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, ctx.quote.created), " ");
    } }, pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"]], styles: [".cards-list[_ngcontent-%COMP%] {\n    \n    width: 100%;\n   \n  }\n  p[_ngcontent-%COMP%]{\n   margin:0.2rem 0; \n  }\n  .pad[_ngcontent-%COMP%]{\n      padding: 0 0.35rem;\n  }\n  .card-1[_ngcontent-%COMP%] {\n    margin: 30px auto;\n    width: 400px;\n    height: 420px;\n    border-radius: 40px;\n    box-shadow: 5px 5px 20px 7px rgba(0,0,0,0.25), -5px -5px 20px 7px rgba(0,0,0,0.22);\n    cursor: pointer;\n    transition: 0.4s;\n    background-color: black;\n    overflow: hidden;\n    position:relative;\n\n\n  }\n  .overlay[_ngcontent-%COMP%]{\n      width:100%;\n      height: 100%;\n      position: absolute;\n      \n      \n      left: 0;\n      top: 0;\n      border-radius: 40px;\n  }\n  .card-1[_ngcontent-%COMP%]   .card_image[_ngcontent-%COMP%] {\n    width: inherit;\n    height: inherit;\n    border-radius: 40px;\n  }\n  .card-1[_ngcontent-%COMP%]   .card_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: inherit;\n    height: inherit;\n    border-radius: 40px;\n    object-fit: cover;\n    \n  }\n  .card-1[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%] {\n    \n    padding: 0.7rem 1rem;\n    border-radius: 0px 0px 40px 40px;\n    font-family: sans-serif;\n    font-size: 1.1rem;\n    height: 50%;\n    margin-top: -50%;\n    background-color: rgba(0, 0, 0, 0.836);\n    \n    position: absolute;\n    width: 100%;\n\n  }\n  .card-1[_ngcontent-%COMP%]:hover {\n    \n    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), \n      -5px -5px 30px 15px rgba(0,0,0,0.22);\n  }\n  .title-white[_ngcontent-%COMP%] {\n    color: white;\n  }\n  .text-green[_ngcontent-%COMP%]{\n      color:green;\n  }\n  .text-yellow[_ngcontent-%COMP%]{\n      color:yellow;\n  }\n  .title-black[_ngcontent-%COMP%] {\n    color: black;\n  }\n  .flex-badges[_ngcontent-%COMP%]{\n      display: flex;\n      justify-content: space-around;\n      align-items: baseline;\n  }\n  .quote-text[_ngcontent-%COMP%]{\n      font-style: italic;\n      color:rgb(115, 175, 199);\n  }\n  .author-text[_ngcontent-%COMP%]{\n    color:greenyellow;\n  }\n  .bg-blood[_ngcontent-%COMP%]{\n    background-color:rgb(131, 0, 0);\n  }\n  @media all and (max-width: 500px) {\n    .card-list[_ngcontent-%COMP%] {\n      \n      flex-direction: column;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7O0VBRWI7RUFDQTtHQUNDLGVBQWU7RUFDaEI7RUFDQTtNQUNJLGtCQUFrQjtFQUN0QjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtGQUFrRjtJQUNsRixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCOzs7RUFHbkI7RUFDQTtNQUNJLFVBQVU7TUFDVixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLDRDQUE0QztNQUM1QyxnQkFBZ0I7TUFDaEIsT0FBTztNQUNQLE1BQU07TUFDTixtQkFBbUI7RUFDdkI7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVzs7RUFFYjtFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDOzBDQUNzQztFQUN4QztFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7TUFDSSxXQUFXO0VBQ2Y7RUFDQTtNQUNJLFlBQVk7RUFDaEI7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO01BQ0ksYUFBYTtNQUNiLDZCQUE2QjtNQUM3QixxQkFBcUI7RUFDekI7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQix3QkFBd0I7RUFDNUI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRTtNQUNFLHNFQUFzRTtNQUN0RSxzQkFBc0I7SUFDeEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcy1saXN0IHtcbiAgICAvKiB6LWluZGV4OiAwOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gIH1cbiAgcHtcbiAgIG1hcmdpbjowLjJyZW0gMDsgXG4gIH1cbiAgLnBhZHtcbiAgICAgIHBhZGRpbmc6IDAgMC4zNXJlbTtcbiAgfVxuICAuY2FyZC0xIHtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCA3cHggcmdiYSgwLDAsMCwwLjI1KSwgLTVweCAtNXB4IDIwcHggN3B4IHJnYmEoMCwwLDAsMC4yMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuXG4gIH1cbiAgLm92ZXJsYXl7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI5NSk7ICovXG4gICAgICAvKiB6LWluZGV4OiAyOyAqL1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIH1cbiAgXG4gIC5jYXJkLTEgLmNhcmRfaW1hZ2Uge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB9XG4gIFxuICAuY2FyZC0xIC5jYXJkX2ltYWdlIGltZyB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgfVxuICBcbiAgLmNhcmQtMSAuY2FyZF90aXRsZSB7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC01MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgzNik7XG4gICAgLyogei1pbmRleDogMTAwMDsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgfVxuICBcbiAgLmNhcmQtMTpob3ZlciB7XG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwLjkyLCAwLjkyKTsgKi9cbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMTVweCByZ2JhKDAsMCwwLDAuMjUpLCBcbiAgICAgIC01cHggLTVweCAzMHB4IDE1cHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgfVxuICBcbiAgLnRpdGxlLXdoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRleHQtZ3JlZW57XG4gICAgICBjb2xvcjpncmVlbjtcbiAgfVxuICAudGV4dC15ZWxsb3d7XG4gICAgICBjb2xvcjp5ZWxsb3c7XG4gIH1cbiAgXG4gIC50aXRsZS1ibGFjayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5mbGV4LWJhZGdlc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgfVxuICAucXVvdGUtdGV4dHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOnJnYigxMTUsIDE3NSwgMTk5KTtcbiAgfVxuICAuYXV0aG9yLXRleHR7XG4gICAgY29sb3I6Z3JlZW55ZWxsb3c7XG4gIH1cbiAgLmJnLWJsb29ke1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEzMSwgMCwgMCk7XG4gIH1cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY2FyZC1saXN0IHtcbiAgICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHdlIGFyZSBubyBsb25nZXIgdXNpbmcgcm93IGRpcmVjdGlvbiBidXQgY29sdW1uICovXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuICBcblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote',
                templateUrl: './quote.component.html',
                styleUrls: ['./quote.component.css']
            }]
    }], function () { return []; }, { quote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteQuote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/quotes/quotes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.ts ***!
  \*******************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addquote_addquote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addquote/addquote.component */ "./src/app/components/addquote/addquote.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote/quote.component */ "./src/app/components/quote/quote.component.ts");





function QuotesComponent_app_quote_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-quote", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteQuote", function QuotesComponent_app_quote_3_Template_app_quote_deleteQuote_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteQuote($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quote", quote_r1);
} }
class QuotesComponent {
    constructor() { }
    getId() {
        let randomId = Math.random();
        return randomId;
    }
    deleteQuote(quote) {
        console.log('delete me');
        this.quotes = this.quotes.filter((q) => {
            return q.id != quote.id;
        });
    }
    addQuote(quote) {
        this.quotes.unshift(quote);
        // console.log(quote)
    }
    ngOnInit() {
        this.quotes = [
            { id: this.getId(),
                author: 'fujo',
                quote: 'live once hell yah',
                upvote: 0,
                downvote: 0,
                bgimage: 'https://source.unsplash.com/user/erondu/720x480',
                created: 1598216988421,
            },
            { id: this.getId(),
                author: 'kitsao',
                quote: 'live once hell yah',
                upvote: 0,
                downvote: 0,
                bgimage: 'https://source.unsplash.com/collection/190737/720x480',
                created: 1598216988421,
            },
            { id: this.getId(),
                author: 'kitsao',
                quote: 'lily was a little girl afraid of the big wide world she was right and you were wrong',
                bgimage: 'https://source.unsplash.com/collection/190728/720x480',
                downvote: 0,
                upvote: 0,
                created: 1598216989421,
            },
            { id: this.getId(),
                author: 'jackson',
                quote: 'live once hell yah',
                downvote: 0,
                upvote: 0,
                bgimage: 'https://source.unsplash.com/collection/190727/720x480',
                created: 1598216988721,
            },
            { id: this.getId(),
                author: 'kevin',
                quote: 'live once hell yah',
                downvote: 0,
                upvote: 0,
                bgimage: 'https://source.unsplash.com/random',
                created: 1598216967421,
            },
        ];
    }
}
QuotesComponent.ɵfac = function QuotesComponent_Factory(t) { return new (t || QuotesComponent)(); };
QuotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesComponent, selectors: [["app-quotes"]], decls: 4, vars: 1, consts: [[1, "flex"], [3, "addQuote"], [1, "card-container"], [3, "quote", "deleteQuote", 4, "ngFor", "ngForOf"], [3, "quote", "deleteQuote"]], template: function QuotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-addquote", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addQuote", function QuotesComponent_Template_app_addquote_addQuote_1_listener($event) { return ctx.addQuote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuotesComponent_app_quote_3_Template, 1, 1, "app-quote", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quotes);
    } }, directives: [_addquote_addquote_component__WEBPACK_IMPORTED_MODULE_1__["AddquoteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"]], styles: [".card-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:center; \n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdW90ZXMvcXVvdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1b3Rlcy9xdW90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quotes',
                templateUrl: './quotes.component.html',
                styleUrls: ['./quotes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateAgo',
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moriga/Desktop/angular/diary/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
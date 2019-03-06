(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ "./src/app/pages/page-home/page-home.component.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-contact/page-contact.component */ "./src/app/pages/page-contact/page-contact.component.ts");
/* harmony import */ var _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-notfound/page-notfound.component */ "./src/app/pages/page-notfound/page-notfound.component.ts");




var routes = [
    {
        path: '',
        component: _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_0__["PageHomeComponent"]
    },
    {
        path: 'movies',
        component: _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_1__["PageMovieListComponent"]
    },
    {
        path: 'contact',
        component: _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_2__["PageContactComponent"]
    },
    {
        path: '**',
        component: _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_3__["PageNotfoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _directives_jumbotron_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/jumbotron.directive */ "./src/app/directives/jumbotron.directive.ts");
/* harmony import */ var _directives_hide_me_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/hide-me.directive */ "./src/app/directives/hide-me.directive.ts");
/* harmony import */ var _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-home/page-home.component */ "./src/app/pages/page-home/page-home.component.ts");
/* harmony import */ var _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-movie-list/page-movie-list.component */ "./src/app/pages/page-movie-list/page-movie-list.component.ts");
/* harmony import */ var _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-contact/page-contact.component */ "./src/app/pages/page-contact/page-contact.component.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/move-list/move-list.component */ "./src/app/components/move-list/move-list.component.ts");
/* harmony import */ var _components_move_list_item_move_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/move-list-item/move-list-item.component */ "./src/app/components/move-list-item/move-list-item.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-notfound/page-notfound.component */ "./src/app/pages/page-notfound/page-notfound.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_6__["PageHomeComponent"],
                _directives_jumbotron_directive__WEBPACK_IMPORTED_MODULE_4__["JumbotronDirective"],
                _directives_hide_me_directive__WEBPACK_IMPORTED_MODULE_5__["HideMeDirective"],
                _pages_page_movie_list_page_movie_list_component__WEBPACK_IMPORTED_MODULE_7__["PageMovieListComponent"],
                _pages_page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_8__["PageContactComponent"],
                _components_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_10__["MoveListComponent"],
                _components_move_list_item_move_list_item_component__WEBPACK_IMPORTED_MODULE_11__["MoveListItemComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_13__["PageNotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appJumbotron>\n  <h1>Movies</h1>\n</div> \n\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"nav\">\n    <li class=\"nav-item\"><a routerLink=\"/\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive=\"btn-primary\" class=\"btn btn-default mr-1\">Strona główna</a></li>\n    <li class=\"nav-item\"><a routerLink=\"/movies\" routerLinkActive=\"btn-primary\" class=\"btn btn-default mr-1\">Filmy</a></li>\n    <li class=\"nav-item\"><a routerLink=\"/contact\" routerLinkActive=\"btn-primary\" class=\"btn btn-default mr-1\">Kontakt</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/move-list-item/move-list-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/move-list-item/move-list-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92ZS1saXN0LWl0ZW0vbW92ZS1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/move-list-item/move-list-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/move-list-item/move-list-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n    <img [src]=\"movie.image\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ movie?.title }}</h5>\n      <p class=\"card-text\">{{ movie?.description }}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/move-list-item/move-list-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/move-list-item/move-list-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: MoveListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListItemComponent", function() { return MoveListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoveListItemComponent = /** @class */ (function () {
    function MoveListItemComponent() {
        this.movie = null;
    }
    MoveListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoveListItemComponent.prototype, "movie", void 0);
    MoveListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-move-list-item',
            template: __webpack_require__(/*! ./move-list-item.component.html */ "./src/app/components/move-list-item/move-list-item.component.html"),
            styles: [__webpack_require__(/*! ./move-list-item.component.css */ "./src/app/components/move-list-item/move-list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoveListItemComponent);
    return MoveListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/move-list/move-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/move-list/move-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92ZS1saXN0L21vdmUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/move-list/move-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/move-list/move-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-wrap justify-content-between\">\n  <app-move-list-item\n  *ngFor=\"let item of movieList\"\n  [movie]=\"item\">\n  </app-move-list-item>\n</div>"

/***/ }),

/***/ "./src/app/components/move-list/move-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/move-list/move-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoveListComponent = /** @class */ (function () {
    function MoveListComponent() {
        this.movieList = [
            {
                title: 'Film #1',
                description: 'Lorem ipsum 1',
                image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
            },
            {
                title: 'Film #2',
                description: 'Lorem ipsum 2',
                image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
            },
            {
                title: 'Film #3',
                description: 'Lorem ipsum 3',
                image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
            }
        ];
    }
    MoveListComponent.prototype.ngOnInit = function () {
    };
    MoveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-move-list',
            template: __webpack_require__(/*! ./move-list.component.html */ "./src/app/components/move-list/move-list.component.html"),
            styles: [__webpack_require__(/*! ./move-list.component.css */ "./src/app/components/move-list/move-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoveListComponent);
    return MoveListComponent;
}());



/***/ }),

/***/ "./src/app/directives/hide-me.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/hide-me.directive.ts ***!
  \*************************************************/
/*! exports provided: HideMeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideMeDirective", function() { return HideMeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HideMeDirective = /** @class */ (function () {
    function HideMeDirective($element, renderer) {
        this.$element = $element;
        this.renderer = renderer;
        this.appHideMe = null;
    }
    HideMeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var $el = this.$element.nativeElement;
        this.renderer.listen(this.$element.nativeElement, 'click', function () {
            setTimeout(function () {
                $el.remove();
            }, _this.appHideMe);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HideMeDirective.prototype, "appHideMe", void 0);
    HideMeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHideMe]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HideMeDirective);
    return HideMeDirective;
}());



/***/ }),

/***/ "./src/app/directives/jumbotron.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/jumbotron.directive.ts ***!
  \***************************************************/
/*! exports provided: JumbotronDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronDirective", function() { return JumbotronDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JumbotronDirective = /** @class */ (function () {
    function JumbotronDirective($element) {
        this.$element = $element;
    }
    JumbotronDirective.prototype.ngOnInit = function () {
        var $el = this.$element.nativeElement;
        $el.classList.add('jumbotron');
    };
    JumbotronDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appJumbotron]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], JumbotronDirective);
    return JumbotronDirective;
}());



/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtY29udGFjdC9wYWdlLWNvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-contact/page-contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-contact/page-contact.component.ts ***!
  \**************************************************************/
/*! exports provided: PageContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContactComponent", function() { return PageContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContactComponent = /** @class */ (function () {
    function PageContactComponent() {
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    PageContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-contact',
            template: __webpack_require__(/*! ./page-contact.component.html */ "./src/app/pages/page-contact/page-contact.component.html"),
            styles: [__webpack_require__(/*! ./page-contact.component.css */ "./src/app/pages/page-contact/page-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageContactComponent);
    return PageContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS9wYWdlLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-move-list></app-move-list>"

/***/ }),

/***/ "./src/app/pages/page-home/page-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.ts ***!
  \********************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHomeComponent = /** @class */ (function () {
    function PageHomeComponent() {
    }
    PageHomeComponent.prototype.addNumbers = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return null;
        return a + b;
    };
    PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-home',
            template: __webpack_require__(/*! ./page-home.component.html */ "./src/app/pages/page-home/page-home.component.html"),
            styles: [__webpack_require__(/*! ./page-home.component.css */ "./src/app/pages/page-home/page-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHomeComponent);
    return PageHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtbW92aWUtbGlzdC9wYWdlLW1vdmllLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-movie-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-movie-list/page-movie-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-movie-list/page-movie-list.component.ts ***!
  \********************************************************************/
/*! exports provided: PageMovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMovieListComponent", function() { return PageMovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageMovieListComponent = /** @class */ (function () {
    function PageMovieListComponent() {
    }
    PageMovieListComponent.prototype.ngOnInit = function () {
    };
    PageMovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-movie-list',
            template: __webpack_require__(/*! ./page-movie-list.component.html */ "./src/app/pages/page-movie-list/page-movie-list.component.html"),
            styles: [__webpack_require__(/*! ./page-movie-list.component.css */ "./src/app/pages/page-movie-list/page-movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageMovieListComponent);
    return PageMovieListComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90Zm91bmQvcGFnZS1ub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotfoundComponent", function() { return PageNotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotfoundComponent = /** @class */ (function () {
    function PageNotfoundComponent() {
    }
    PageNotfoundComponent.prototype.ngOnInit = function () {
    };
    PageNotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-notfound',
            template: __webpack_require__(/*! ./page-notfound.component.html */ "./src/app/pages/page-notfound/page-notfound.component.html"),
            styles: [__webpack_require__(/*! ./page-notfound.component.css */ "./src/app/pages/page-notfound/page-notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotfoundComponent);
    return PageNotfoundComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Desktop\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
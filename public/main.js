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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-drakon></app-drakon>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-drakon';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _drakon_drakon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drakon/drakon.component */ "./src/app/drakon/drakon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _drakon_drakon_component__WEBPACK_IMPORTED_MODULE_5__["DrakonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getEntorpecentesItems = function () {
        return this.http.get('items/')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addEntorpecentesItem = function (newItem) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('item/', newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteEntorpecentesItem = function (id) {
        return this.http.delete('item/' + id)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.updateEntorpecentesItem = function (newItem) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('item/' + newItem._id, newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/drakon/drakon.component.css":
/*!*********************************************!*\
  !*** ./src/app/drakon/drakon.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teste{\n\tfont-family: verdana; \n}\n\ntable{\n    width:100%;\n}\n\n#example_filter{\n    float:right;\n}\n\n#example_paginate{\n    float:right;\n}\n\nlabel {\n    display: inline-flex;\n    margin-bottom: .5rem;\n    margin-top: .5rem;\n}"

/***/ }),

/***/ "./src/app/drakon/drakon.component.html":
/*!**********************************************!*\
  !*** ./src/app/drakon/drakon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n       <table class=\"table table-striped\">\n          <tbody>\n             <tr>\n                <td colspan=\"1\">\n                   <form class=\"well form-horizontal\">\n                      <fieldset>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Full Name</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span><input id=\"fullName\" name=\"fullName\" placeholder=\"Full Name\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Address Line 1</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine1\" name=\"addressLine1\" placeholder=\"Address Line 1\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Address Line 2</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine2\" name=\"addressLine2\" placeholder=\"Address Line 2\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">City</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"city\" name=\"city\" placeholder=\"City\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">State/Province/Region</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"state\" name=\"state\" placeholder=\"State/Province/Region\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"postcode\" name=\"postcode\" placeholder=\"Postal Code/ZIP\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Country</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\">\n                                  <span class=\"input-group-addon\" style=\"max-width: 100%;\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                  <select class=\"selectpicker form-control\">\n                                     <option>A really long option to push the menu over the edget</option>\n                                  </select>\n                               </div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Email</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span><input id=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Phone Number</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span><input id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                      </fieldset>\n                   </form>\n                </td>\n                <td colspan=\"1\">\n                   <form class=\"well form-horizontal\">\n                      <fieldset>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Full Name</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span><input id=\"fullName\" name=\"fullName\" placeholder=\"Full Name\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Address Line 1</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine1\" name=\"addressLine1\" placeholder=\"Address Line 1\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Address Line 2</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"addressLine2\" name=\"addressLine2\" placeholder=\"Address Line 2\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">City</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"city\" name=\"city\" placeholder=\"City\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">State/Province/Region</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"state\" name=\"state\" placeholder=\"State/Province/Region\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-home\"></i></span><input id=\"postcode\" name=\"postcode\" placeholder=\"Postal Code/ZIP\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Country</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\">\n                                  <span class=\"input-group-addon\" style=\"max-width: 100%;\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                  <select class=\"selectpicker form-control\">\n                                     <option>A really long option to push the menu over the edget</option>\n                                  </select>\n                               </div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Email</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span><input id=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"col-md-4 control-label\">Phone Number</label>\n                            <div class=\"col-md-8 inputGroupContainer\">\n                               <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span><input id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n                            </div>\n                         </div>\n                      </fieldset>\n                   </form>\n                </td>\n             </tr>\n          </tbody>\n       </table>\n    </div>\n\n\n\n<!--  ################     !--> \n\n\n<br>\n<form #frm = \"ngForm\" (ngSubmit)=\"addItem(frm)\" *ngIf=\"!toggleForm\" class=\"form-group\">\n\t<h2>Cadastrar item</h2>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Nome de usuário</label>\n      <input type=\"text\" class=\"form-control\" name=\"userName\" value=\"\" ngModel required>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Procedimento</label>\n      <input type=\"text\" class=\"form-control\" name=\"procedimento\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">N° Procedimento</label>\n      <input type=\"text\" class=\"form-control\" name=\"n_proced\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Data Entrada</label>\n      <input type=\"text\" class=\"form-control\" name=\"data_entrada\" value=\"\" ngModel>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">Investigado(a)</label>\n    <input type=\"text\" class=\"form-control\" name=\"investigado\" value=\"\" ngModel>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-4\">\n      <label for=\"inputState\">Substância</label>\n      <select name=\"substancia\" class=\"form-control\" value=\"\" ngModel>\n        <option>Clorofórmio</option>\n        <option>Cocaína</option>\n        <option>Comprimidos</option>\n        <option>Crack</option>\n        <option>Maconha</option>\n        <option>Outro</option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"inputPassword4\">Quantidade</label>\n      <input type=\"text\" class=\"form-control\" name=\"quant\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label>Unidade</label>\n      <select name=\"und\" class=\"form-control\" value=\"\" ngModel>\n        <option>G</option>\n        <option>ML</option>\n        <option>Und.</option>\n      </select>\n    </div>\n  </div>\n   <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Laudo</label>\n      <input type=\"text\" class=\"form-control\" name=\"laudo\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Vara</label>\n      <input type=\"text\" class=\"form-control\" name=\"vara\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">N° Processo</label>\n      <input type=\"text\" class=\"form-control\" name=\"n_processo\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Lacre</label>\n      <input type=\"text\" class=\"form-control\" name=\"lacre\" value=\"\" ngModel>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Data Autorização</label>\n      <input type=\"text\" class=\"form-control\" name=\"data_autorizacao\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Caixa</label>\n      <input type=\"text\" class=\"form-control\" name=\"caixa\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Ofício</label>\n      <input type=\"text\" class=\"form-control\" name=\"oficio\" value=\"\" ngModel>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Delegacia</label>\n      <input type=\"text\" class=\"form-control\" name=\"delegacia\" value=\"\" ngModel>\n    </div>\n  </div>\n\n  <button type=\"submit\" name=\"button\" class=\"btn btn-sucess\" [disabled]= frm.invalid>Adicionar</button>\n</form>\n\n<!--------- EDITAR ITEM ---------->\n\n<form #editFrm = \"ngForm\" (ngSubmit)=\"editItem(editFrm)\"*ngIf=\"toggleForm\">\n\t<h2>Editar item</h2>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Nome de usuário</label>\n      <input type=\"text\" class=\"form-control\" name=\"userName\" value=\"\" [ngModel]=\"selectedItem.userName\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Procedimento</label>\n      <input type=\"text\" class=\"form-control\" name=\"procedimento\" value=\"\" [ngModel]=\"selectedItem.procedimento\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">N° Procedimento</label>\n      <input type=\"text\" class=\"form-control\" name=\"n_proced\" value=\"\" [ngModel]=\"selectedItem.n_proced\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Data Entrada</label>\n      <input type=\"text\" class=\"form-control\" name=\"data_entrada\" value=\"\" [ngModel]=\"selectedItem.data_entrada\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Investigado(a)</label>\n    <input type=\"text\" class=\"form-control\" name=\"investigado\" value=\"\" [ngModel]=\"selectedItem.investigado\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-4\">\n      <label for=\"\">Substância</label>\n      <select name=\"substancia\" class=\"form-control\" value=\"\" [ngModel]=\"selectedItem.substancia\">\n        <option>Clorofórmio</option>\n        <option>Cocaína</option>\n        <option>Comprimidos</option>\n        <option>Crack</option>\n        <option>Maconha</option>\n        <option>Outro</option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"\">Quantidade</label>\n      <input type=\"text\" class=\"form-control\" name=\"quant\" value=\"\" [ngModel]=\"selectedItem.quant\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label>Unidade</label>\n      <select name=\"und\" class=\"form-control\" value=\"\" [ngModel]=\"selectedItem.und\">\n        <option>G</option>\n        <option>ML</option>\n        <option>Und.</option>\n      </select>\n    </div>\n  </div>\n   <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Laudo</label>\n      <input type=\"text\" class=\"form-control\" name=\"laudo\" value=\"\" [ngModel]=\"selectedItem.laudo\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Vara</label>\n      <input type=\"text\" class=\"form-control\" name=\"vara\" value=\"\" [ngModel]=\"selectedItem.vara\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">N° Processo</label>\n      <input type=\"text\" class=\"form-control\" name=\"n_processo\" value=\"\" [ngModel]=\"selectedItem.n_processo\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Lacre</label>\n      <input type=\"text\" class=\"form-control\" name=\"lacre\" value=\"\" [ngModel]=\"selectedItem.lacre\">\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Data Autorização</label>\n      <input type=\"text\" class=\"form-control\" name=\"data_autorizacao\" value=\"\" [ngModel]=\"selectedItem.data_autorizacao\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Caixa</label>\n      <input type=\"text\" class=\"form-control\" name=\"caixa\" value=\"\" [ngModel]=\"selectedItem.caixa\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Ofício</label>\n      <input type=\"text\" class=\"form-control\" name=\"oficio\" value=\"\" [ngModel]=\"selectedItem.oficio\">\n    </div>\n    <div class=\"form-group col-md-3\">\n      <label for=\"\">Delegacia</label>\n      <input type=\"text\" class=\"form-control\" name=\"delegacia\" value=\"\" [ngModel]=\"selectedItem.delegacia\">\n    </div>\n  </div>\n\n  <button type=\"submit\" name=\"button\" class=\"btn btn-sucess\">Salvar</button>\n</form>\n\n<!--------- LISTAR ITEM ---------->\n\n<br><br>\n\n<h2>\n\tLista de items:\n</h2>\n<br>\n\n\n\n<!------ Include the above in your HEAD tag ---------->\n<div class=\"container\">\n  <div class=\"row\">\n  <table id=\"\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n        <thead>\n            <tr>\n                <th><input type=\"checkbox\" onclick=\"checkAll(this)\"></th>\n                <th>Procedimento</th>\n                <th>N° Procedimento</th>\n                <th>Data Entrada</th>\n                <th>Investigado(a)</th>\n                <th>Substância</th>\n                <th>Qtd.</th>\n                <th>Und.</th>\n                <th>Laudo</th>\n                <th>Vara</th>\n                <th>N° Processo</th>\n                <th>Lacre</th>\n                <th>Data Autorização</th>\n                <th>Caixa</th>\n                <th>Ofício</th>\n                <th>Delegacia</th>\n                <th></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody *ngFor = \"let item of entorpecentesLista\">\n            <tr>\n                <td><input type=\"checkbox\" name=\"\"></td>\n                <td class=\"text-center\">{{item.procedimento}}</td>\n                <td class=\"text-center\">{{item.n_proced}}</td>\n                <td class=\"text-center\">{{item.data_entrada}}</td>\n                <td class=\"text-center\">{{item.investigado}}</td>\n                <td class=\"text-center\">{{item.substancia}}</td>\n                <td class=\"text-center\">{{item.quant}}</td>\n                <td class=\"text-center\">{{item.und}}</td>\n                <td class=\"text-center\">{{item.laudo}}</td>\n                <td class=\"text-center\">{{item.vara}}</td>\n                <td class=\"text-center\">{{item.n_processo}}</td>\n                <td class=\"text-center\">{{item.lacre}}</td>\n                <td class=\"text-center\">{{item.data_autorizacao}}</td>\n                <td class=\"text-center\">{{item.caixa}}</td>\n                <td class=\"text-center\">{{item.oficio}}</td>\n                <td class=\"text-center\">{{item.delegacia}}</td>\n                <td class=\"text-center\"> <button type=\"button\" name=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item._id)\">Excluir</button></td>\n                <td class=\"text-center\"> <button type=\"button\" name=\"buttonEdit\" class=\"btn btn-primary\" (click)=\"showEditForm(item)\" [disabled]=\"toggleForm\">Editar</button></td>\n            </tr>        \n        </tbody>\n        <tfoot>\n            <tr>\n              <th></th>\n                <th>Procedimento</th>\n                <th>N° Procedimento</th>\n                <th>Data Entrada</th>\n                <th>Investigado(a)</th>\n                <th>Substância</th>\n                <th>Qtd.</th>\n                <th>Und.</th>\n                <th>Laudo</th>\n                <th>Vara</th>\n                <th>N° Processo</th>\n                <th>Lacre</th>\n                <th>Data Autorização</th>\n                <th>Caixa</th>\n                <th>Ofício</th>\n                <th>Delegacia</th>\n                <th></th>\n                <th></th>\n            </tr>\n        </tfoot>\n    </table>\n  </div>\n</div>\n\n<!-- \n<table class=\"table table-bordered table-striped\">\n  <thead>\n    <tr>\n      <th class=\"text-center\">\n        Procedimento<br>\n      </th>\n      <th class=\"text-center\">\n        N° Procedimento<br>\n      </th>\n      <th class=\"text-center\">\n        Data Entrada<br>\n      </th>\n      <th class=\"text-center\">\n        Investigado(a)<br>\n      </th>\n      <th class=\"text-center\">\n        Substância<br>\n      </th>\n      <th class=\"text-center\">\n        Qnt.<br>\n      </th>\n      <th class=\"text-center\">\n        Und.<br>\n      </th>\n      <th class=\"text-center\">\n        Laudo<br>\n      </th>\n      <th class=\"text-center\">\n        Vara<br>\n      </th>\n      <th class=\"text-center\">\n        N° Processo<br>\n      </th>\n      <th class=\"text-center\">\n        Lacre<br>\n      </th>\n      <th class=\"text-center\">\n        Data Autor.<br>\n      </th>\n      <th class=\"text-center\">\n        Caixa<br>\n      </th>\n      <th class=\"text-center\">\n        Ofício<br>\n      </th>\n      <th class=\"text-center\">\n        Delegacia<br>\n      </th>\n      <th class=\"text-center\">\n        <br>\n      </th>\n    </tr>\n  </thead>\n  <tbody *ngFor = \"let item of entorpecentesLista\">\n    <tr>\n      <td class=\"text-center\">{{item.procedimento}}</td>\n      <td class=\"text-center\">{{item.n_proced}}</td>\n      <td class=\"text-center\">{{item.data_entrada}}</td>\n      <td class=\"text-center\">{{item.investigado}}</td>\n      <td class=\"text-center\">{{item.substancia}}</td>\n      <td class=\"text-center\">{{item.quant}}</td>\n      <td class=\"text-center\">{{item.und}}</td>\n      <td class=\"text-center\">{{item.laudo}}</td>\n      <td class=\"text-center\">{{item.vara}}</td>\n      <td class=\"text-center\">{{item.n_processo}}</td>\n      <td class=\"text-center\">{{item.lacre}}</td>\n      <td class=\"text-center\">{{item.data_autorizacao}}</td>\n      <td class=\"text-center\">{{item.caixa}}</td>\n      <td class=\"text-center\">{{item.oficio}}</td>\n      <td class=\"text-center\">{{item.delegacia}}</td>\n      <td class=\"text-center\"> <button type=\"button\" name=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item._id)\">Excluir</button></td>\n      <td class=\"text-center\"> <button type=\"button\" name=\"buttonEdit\" class=\"btn btn-primary\" (click)=\"showEditForm(item)\" [disabled]=\"toggleForm\">Editar</button></td>\n    </tr>\n   </tbody>\n</table>\n\n-->\n"

/***/ }),

/***/ "./src/app/drakon/drakon.component.ts":
/*!********************************************!*\
  !*** ./src/app/drakon/drakon.component.ts ***!
  \********************************************/
/*! exports provided: DrakonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrakonComponent", function() { return DrakonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrakonComponent = /** @class */ (function () {
    function DrakonComponent(dataService) {
        this.dataService = dataService;
        this.entorpecentesLista = [];
        this.toggleForm = false;
    }
    // Ao iniciar a página, executa esse método retornando a lista de itens
    DrakonComponent.prototype.getItems = function () {
        var _this = this;
        this.dataService.getEntorpecentesItems()
            .subscribe(function (items) {
            _this.entorpecentesLista = items;
            console.log('data from dataservice: ' + _this.entorpecentesLista[0].userName);
        });
    };
    // Ao clicar no botão adicionar, executa o método
    DrakonComponent.prototype.addItem = function (form) {
        var _this = this;
        var newItem = {
            userName: form.value.userName,
            procedimento: form.value.procedimento,
            n_proced: form.value.n_proced,
            data_entrada: form.value.data_entrada,
            investigado: form.value.investigado,
            substancia: form.value.substancia,
            quant: form.value.quant,
            und: form.value.und,
            laudo: form.value.laudo,
            vara: form.value.vara,
            n_processo: form.value.n_processo,
            lacre: form.value.lacre,
            data_autorizacao: form.value.data_autorizacao,
            caixa: form.value.caixa,
            oficio: form.value.oficio,
            delegacia: form.value.delegacia
        };
        this.dataService.addEntorpecentesItem(newItem)
            .subscribe(function (item) {
            console.log(item);
            //Ao terminar a inserção, adiciona o elemento na exibição
            _this.getItems();
        });
    };
    DrakonComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.dataService.deleteEntorpecentesItem(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.n == 1) {
                for (var i = 0; i < _this.entorpecentesLista.length; i++) {
                    if (id == _this.entorpecentesLista[i]._id) {
                        _this.entorpecentesLista.splice(i, 1);
                    }
                }
            }
        });
    };
    DrakonComponent.prototype.editItem = function (form) {
        var _this = this;
        var newItem = {
            _id: this.selectedItem._id,
            userName: form.value.userName,
            procedimento: form.value.procedimento,
            n_proced: form.value.n_proced,
            data_entrada: form.value.data_entrada,
            investigado: form.value.investigado,
            substancia: form.value.substancia,
            quant: form.value.quant,
            und: form.value.und,
            laudo: form.value.laudo,
            vara: form.value.vara,
            n_processo: form.value.n_processo,
            lacre: form.value.lacre,
            data_autorizacao: form.value.data_autorizacao,
            caixa: form.value.caixa,
            oficio: form.value.oficio,
            delegacia: form.value.delegacia
        };
        this.dataService.updateEntorpecentesItem(newItem)
            .subscribe(function (result) {
            console.log('Alterando valores do item antigo:' + result);
            _this.getItems();
        });
        this.toggleForm = !this.toggleForm;
    };
    DrakonComponent.prototype.showEditForm = function (item) {
        this.selectedItem = item;
        this.toggleForm = !this.toggleForm;
    };
    DrakonComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    DrakonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drakon',
            template: __webpack_require__(/*! ./drakon.component.html */ "./src/app/drakon/drakon.component.html"),
            styles: [__webpack_require__(/*! ./drakon.component.css */ "./src/app/drakon/drakon.component.css")],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DrakonComponent);
    return DrakonComponent;
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

module.exports = __webpack_require__(/*! /home/icaro/Documentos/Drakon/angular-drakon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
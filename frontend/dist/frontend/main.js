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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-employee/create-employee.component */ "./src/app/components/create-employee/create-employee.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_7__["EmployeesComponent"],
                _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_8__["CreateEmployeeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-employee/create-employee.component */ "./src/app/components/create-employee/create-employee.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'employees', component: _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_1__["EmployeesComponent"] },
    { path: 'create-employee', component: _components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__["CreateEmployeeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-dark text-white\">\n    <h1 class=\"h2 text-center pt-3 pb-3\">CREATE EMPLOYEE</h1>\n  </div>\n  <div class=\"container\">\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"createEmployee()\" class=\"mt-4\">\n\n        <div class=\"form-group row\">\n          <label for=\"name\" class=\"col-sm-2 col-md-2 col-form-label\">Name</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"email\" class=\"col-sm-2 col-md-2 col-form-label\">Email</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"gender\" class=\"col-sm-2 col-md-2 col-form-label\">Genre</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" required>\n              <option value=\"Femme\">Femme</option>\n              <option value=\"Homme\">Homme</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"phone\" class=\"col-sm-2 col-md-2 col-form-label\">Phone</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"beach\" class=\"col-sm-2 col-md-2 col-form-label\">Beach</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <select class=\"form-control\" id=\"beach\" formControlName=\"beach\" required>\n              <option *ngFor=\"let beach of beaches\" [value]=\"beach.name\">{{beach.name}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"pt-3 text-center\">\n          <a routerLink=\"/employees\" class=\"btn btn-dark text-white mr-1\"><i class=\"fa fa-chevron-left\"></i> Back</a>\n          <button class=\"btn btn-dark text-white\" [disabled]=\"!employeeForm.valid\"> Create <i class=\"fa fa-check\"></i></button>\n        </div>    \n    </form>\n  </div>  "

/***/ }),

/***/ "./src/app/components/create-employee/create-employee.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-employee/create-employee.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_beach_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/beach.service */ "./src/app/services/beach.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(employeeService, beachService, router) {
        this.employeeService = employeeService;
        this.beachService = beachService;
        this.router = router;
        this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            beach: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.beaches = [];
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        this.getBeaches();
    };
    CreateEmployeeComponent.prototype.createEmployee = function () {
        var _this = this;
        this.employeeForm.patchValue({
            beach: this.findBeach(this.employeeForm.get('beach').value)
        });
        this.employeeService.createEmployee(this.employeeForm.value)
            .subscribe(function (res) {
            _this.router.navigate(['/employees']);
        });
    };
    CreateEmployeeComponent.prototype.getBeaches = function () {
        var _this = this;
        this.beachService.getBeaches()
            .subscribe(function (beachesData) {
            _this.beaches = beachesData;
        });
    };
    CreateEmployeeComponent.prototype.findBeach = function (name) {
        return this.beaches.find(function (beach) { return beach.name == name; });
    };
    CreateEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/components/create-employee/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/components/create-employee/create-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            src_app_services_beach_service__WEBPACK_IMPORTED_MODULE_4__["BeachService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employees.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/employees/employees.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 60px;\r\n}\r\n\r\n.add-employee {\r\n    position: absolute;\r\n    right: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5hZGQtZW1wbG95ZWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/employees/employees.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/employees/employees.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"!employeeSelected\">\n  <div class=\"bg-dark text-white\">\n      <h1 class=\"h2 text-center pt-3 pb-3\">EMPLOYES</h1>             \n  </div>\n\n  <div class=\"add-employee\">\n      <a [routerLink]=\"['/create-employee']\" class=\"btn btn-secondary mb-4 rounded-circle\">\n        <i class=\"fa fa-plus\"></i></a>  \n  </div>\n\n  <div class=\"container pt-5\">\n    <div class=\"row\">                   \n           \n      <div class=\"col-md-6 pb-5\" *ngFor=\"let employee of employees;let i = index\" [attr.data-index]=\"i\">\n        <div class=\"media rounded border border-light shadow p-3\">\n\n          <ng-template [ngIf]=\"employee.gender === 'Femme'\" [ngIfElse]=\"isMan\">\n              <img src=\"../../../assets/woman.svg\" class=\"mr-2\">\n          </ng-template>\n          <ng-template #isMan>\n              <img src=\"../../../assets/man.svg\" class=\"mr-2\">\n          </ng-template>                \n          \n          <div class=\"media-body\">\n            <h5 class=\"mt-0 mb-1 text-uppercase text-secondary\">{{employee.name}}</h5>\n            <p class=\"mt-0 mb-1 text-muted\">{{employee.email}}</p>\n            <div class=\"pt-2 float-right\">\n                <a href=\"tel:{{employee.telephone}}\" class=\"pr-3\"><i class=\"fa fa-phone \"></i></a>\n                <a (click)=\"selectEmployee(employee)\" class=\"pr-3\"><i class=\"fa fa-pencil-square-o \"></i></a>\n                <a (click)=\"deleteEmployee(employee)\" class=\"pr-3\"><i class=\"fa fa-trash-o \"></i></a>\n            </div>\n          </div>\n\n        </div>               \n      </div>\n\n    </div>     \n  </div>  \n</ng-template>\n\n<ng-template [ngIf]=\"employeeSelected\">\n  <div class=\"bg-dark text-white\">\n    <h1 class=\"h2 text-center pt-3 pb-3\">UPDATE EMPLOYEE</h1>\n  </div>\n  <div class=\"container\">\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"updateEmployee()\" class=\"mt-3 pt-5\">\n\n        <div class=\"form-group row\">\n          <label for=\"name\" class=\"col-sm-2 col-md-2 col-form-label\">Name</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"email\" class=\"col-sm-2 col-md-2 col-form-label\">Email</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"gender\" class=\"col-sm-2 col-md-2 col-form-label\">Genre</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <select class=\"form-control\" id=\"gender\" formControlName=\"gender\" required>\n              <option value=\"Femme\">Femme</option>\n              <option value=\"Homme\">Homme</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"phone\" class=\"col-sm-2 col-md-2 col-form-label\">Phone</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <input type=\"text\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"beach\" class=\"col-sm-2 col-md-2 col-form-label\">Beach</label>\n          <div class=\"col-sm-6 col-md-6\">\n            <select class=\"form-control\" id=\"beach\" formControlName=\"beach\" required>\n              <option *ngFor=\"let beach of beaches\" [value]=\"beach.name\">{{beach.name}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"row pt-5\">\n          <a (click)=\"resetEmployeeSeleted()\" class=\"btn btn-dark text-white mr-1\"><i class=\"fa fa-chevron-left\"></i> Back</a>\n          <button class=\"btn btn-dark text-white\" [disabled]=\"!employeeForm.valid\"> Update <i class=\"fa fa-check\"></i></button>\n        </div>    \n    </form>\n  </div>  \n</ng-template>"

/***/ }),

/***/ "./src/app/components/employees/employees.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/employees/employees.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_beach_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/beach.service */ "./src/app/services/beach.service.ts");






var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, beachService, router) {
        this.employeeService = employeeService;
        this.beachService = beachService;
        this.router = router;
        this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            beach: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.employees = [];
        this.beaches = [];
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employeesData) {
            _this.employees = employeesData;
        });
    };
    EmployeesComponent.prototype.getBeaches = function () {
        var _this = this;
        this.beachService.getBeaches()
            .subscribe(function (beachesData) {
            _this.beaches = beachesData;
        });
    };
    EmployeesComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.employeeService.deleteEmployee(employee._id)
            .subscribe(function (res) {
            _this.getEmployees();
        });
    };
    EmployeesComponent.prototype.selectEmployee = function (employee) {
        this.getBeaches();
        this.employeeSelected = employee;
        this.employeeForm.patchValue({
            _id: this.employeeSelected._id,
            name: this.employeeSelected.name,
            email: this.employeeSelected.email,
            phone: this.employeeSelected.phone,
            beach: this.employeeSelected.beach.name,
            gender: this.employeeSelected.gender
        });
    };
    EmployeesComponent.prototype.updateEmployee = function () {
        var _this = this;
        this.employeeForm.patchValue({
            beach: this.findBeach(this.employeeForm.get('beach').value)
        });
        this.employeeService.updateEmployee(this.employeeForm.value)
            .subscribe(function (res) {
            _this.resetEmployeeSeleted();
            _this.getEmployees();
        }, function (err) {
            console.log(err);
        });
    };
    EmployeesComponent.prototype.findBeach = function (name) {
        return this.beaches.find(function (beach) { return beach.name == name; });
    };
    EmployeesComponent.prototype.resetEmployeeSeleted = function () {
        this.employeeSelected = null;
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/components/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            src_app_services_beach_service__WEBPACK_IMPORTED_MODULE_5__["BeachService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"padding-top: 150px;\">\n  <div class=\"row\">\n    <div class=\"col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4\">\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"getLogin()\" style=\"padding-bottom: 40px; padding-top: 30px;\">\n          <div class=\"text-center\">\n              <img class=\"mb-4\" src=\"../../../assets/ice-cream-logo.png\" alt=\"\" width=\"85\">\n          </div>\n          \n          <div class=\"form-group\">\n            <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required autofocus=\"\">\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n          </div>\n\n          <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!loginForm.valid\" type=\"submit\">Sign in</button>\n        </form>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getLogin = function () {
        var _this = this;
        var user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.loginForm.value.email, this.loginForm.value.password);
        this.authenticationService.validateUser(user)
            .subscribe(function (res) {
            //localStorage.getItem('token')?localStorage.removeItem('token'):localStorage.setItem('token', res.token);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['employees']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password, token) {
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        if (token === void 0) { token = ''; }
        this.email = email;
        this.password = password;
        this.token = token;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.URL_API = 'http://localhost:3000/api';
    }
    AuthenticationService.prototype.validateUser = function (user) {
        var userData = 'email=' + user.email + '&password=' + user.password;
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'true' });
        return this.http.post(this.URL_API + '/login', userData, { headers: reqHeader });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/beach.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/beach.service.ts ***!
  \*******************************************/
/*! exports provided: BeachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeachService", function() { return BeachService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BeachService = /** @class */ (function () {
    function BeachService(http) {
        this.http = http;
        this.reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.URL_API = 'http://localhost:3000/api/beaches';
    }
    BeachService.prototype.getBeaches = function () {
        return this.http.get(this.URL_API, { headers: this.reqHeader });
    };
    BeachService.prototype.createBeach = function (beach) {
        return this.http.post(this.URL_API, beach, { headers: this.reqHeader });
    };
    BeachService.prototype.updateBeach = function (beach) {
        return this.http.put(this.URL_API + ("/" + beach._id), beach, { headers: this.reqHeader });
    };
    BeachService.prototype.deleteBeach = function (id) {
        return this.http.delete(this.URL_API + ("/" + id), { headers: this.reqHeader });
    };
    BeachService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BeachService);
    return BeachService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.URL_API = 'http://localhost:3000/api/employees';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.URL_API, { headers: this.reqHeader });
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        return this.http.post(this.URL_API, employee, { headers: this.reqHeader });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.URL_API + ("/" + employee._id), employee, { headers: this.reqHeader });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.URL_API + ("/" + id), { headers: this.reqHeader });
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
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

module.exports = __webpack_require__(/*! D:\Proyectos Angular\mean\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
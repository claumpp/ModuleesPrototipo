function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["body"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: 'body',
          template: '<router-outlet></router-outlet>'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _webmap_webmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./webmap/webmap.component */
    "./src/app/webmap/webmap.component.ts");
    /* harmony import */


    var _container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./container/container.component */
    "./src/app/container/container.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/detail/detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _webmap_webmap_component__WEBPACK_IMPORTED_MODULE_5__["WebmapComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _webmap_webmap_component__WEBPACK_IMPORTED_MODULE_5__["WebmapComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _webmap_webmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./webmap/webmap.component */
    "./src/app/webmap/webmap.component.ts");
    /* harmony import */


    var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./container/container.component */
    "./src/app/container/container.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/detail/detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/webmap',
      pathMatch: 'full'
    }, {
      path: '',
      component: _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"],
      children: [{
        path: 'webmap',
        component: _webmap_webmap_component__WEBPACK_IMPORTED_MODULE_2__["WebmapComponent"]
      }, {
        path: 'detail/:rc',
        data: {
          title: 'Detail'
        },
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "navbar"], [1, "navbar-brand"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PROTOTIPO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/container/container.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/container/container.component.ts ***!
    \**************************************************/

  /*! exports provided: ContainerComponent */

  /***/
  function srcAppContainerContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
      return ContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContainerComponent = /*#__PURE__*/function () {
      function ContainerComponent() {
        _classCallCheck(this, ContainerComponent);
      }

      _createClass(ContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContainerComponent;
    }();

    ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
      return new (t || ContainerComponent)();
    };

    ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerComponent,
      selectors: [["app-container"]],
      decls: 5,
      vars: 0,
      consts: [[1, "app-body"], [1, "main"], [1, "container-fluid"]],
      template: function ContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container',
          templateUrl: './container.component.html',
          styleUrls: ['./container.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/detail/detail.component.ts":
  /*!********************************************!*\
    !*** ./src/app/detail/detail.component.ts ***!
    \********************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/property */
    "./src/app/model/property.ts");
    /* harmony import */


    var _services_cadastre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cadastre.service */
    "./src/app/services/cadastre.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DetailComponent = /*#__PURE__*/function () {
      function DetailComponent(catastroService, route) {
        _classCallCheck(this, DetailComponent);

        this.catastroService = catastroService;
        this.route = route;
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var rc = this.route.snapshot.paramMap.get('rc');
          this.catastroService.getBuildingDetailsByRC(rc).subscribe(function (prop) {
            var parser2 = new DOMParser();
            var dataXML = parser2.parseFromString(prop, 'text/xml');
            var properties = dataXML.getElementsByTagName('bico')[0];
            _this.property = _this.convertToProperty(properties, rc);
          });
        }
      }, {
        key: "convertToProperty",
        value: function convertToProperty(info, rc) {
          var address = info.getElementsByTagName('ldt')[0].textContent;
          var use = info.getElementsByTagName('luso')[0].textContent;
          var surfaceCons = info.getElementsByTagName('sfc')[0].textContent;
          var year = info.getElementsByTagName('ant')[0].textContent;
          var surfaceGraph = info.getElementsByTagName('sfc')[0].textContent;
          var participation = info.getElementsByTagName('cpt')[0].textContent;
          return new _model_property__WEBPACK_IMPORTED_MODULE_1__["Property"](rc, '', '', surfaceCons, '', '', '', year, '', address, use, surfaceGraph, participation);
        }
      }]);

      return DetailComponent;
    }();

    DetailComponent.ɵfac = function DetailComponent_Factory(t) {
      return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cadastre_service__WEBPACK_IMPORTED_MODULE_2__["CadastreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailComponent,
      selectors: [["app-detail"]],
      decls: 20,
      vars: 6,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-text"]],
      template: function DetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DATOS DESCRIPTIVOS DEL INMUEBLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PARCELA CATASTRAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Referencia catastral: ", ctx.property.rc, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Localizaci\xF3n: ", ctx.property.completeAddress, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Uso principal: ", ctx.property.use, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Superficie construida: ", ctx.property.surfaceCons, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A\xF1o construcci\xF3n: ", ctx.property.yearConstruction, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Participaci\xF3n del inmueble: ", ctx.property.participation, " %");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detail',
          templateUrl: './detail.component.html',
          styleUrls: ['./detail.component.css']
        }]
      }], function () {
        return [{
          type: _services_cadastre_service__WEBPACK_IMPORTED_MODULE_2__["CadastreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/property.ts":
  /*!***********************************!*\
    !*** ./src/app/model/property.ts ***!
    \***********************************/

  /*! exports provided: Property */

  /***/
  function srcAppModelPropertyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Property", function () {
      return Property;
    });

    var Property = /*#__PURE__*/function (_Object) {
      _inherits(Property, _Object);

      var _super = _createSuper(Property);

      function Property(rc, address, locInt, surfaceCons, postalCode, province, town, yearConstruction, type, completeAddress, use, surfaceGraph, participation) {
        var _this2;

        _classCallCheck(this, Property);

        _this2 = _super.call(this);
        _this2.rc = rc;
        _this2.address = address;
        _this2.locInt = locInt;
        _this2.surfaceCons = surfaceCons;
        _this2.postalCode = postalCode;
        _this2.province = province;
        _this2.town = town;
        _this2.yearConstruction = yearConstruction;
        _this2.type = type;
        _this2.completeAddress = completeAddress;
        _this2.use = use;
        _this2.surfaceGraph = surfaceGraph;
        _this2.participation = participation;
        return _this2;
      }

      return Property;
    }( /*#__PURE__*/_wrapNativeSuper(Object));
    /***/

  },

  /***/
  "./src/app/services/cadastre.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/cadastre.service.ts ***!
    \**********************************************/

  /*! exports provided: CadastreService */

  /***/
  function srcAppServicesCadastreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastreService", function () {
      return CadastreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CadastreService = /*#__PURE__*/function () {
      function CadastreService(http) {
        _classCallCheck(this, CadastreService);

        this.http = http;
        this.CATASTRO_SPAIN_BY_COORDINATES = 'https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR';
        this.CATASTRO_SPAIN_BY_RC = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx/Consulta_DNPRC';
      }

      _createClass(CadastreService, [{
        key: "getRCByCoordinates",
        value: function getRCByCoordinates(coorX, coorY) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/xml'
          });
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('SRS', 'EPSG:25830').set('Coordenada_X', coorX).set('Coordenada_Y', coorY);
          var options = {
            header: header,
            params: params,
            responseType: 'text'
          };
          return this.http.request('GET', this.CATASTRO_SPAIN_BY_COORDINATES, options);
        }
      }, {
        key: "getBuildingDetailsByRC",
        value: function getBuildingDetailsByRC(rc) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/xml'
          });
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('RC', rc).set('Provincia', '').set('Municipio', '');
          var options = {
            header: header,
            params: params,
            responseType: 'text'
          };
          return this.http.request('GET', this.CATASTRO_SPAIN_BY_RC, options);
        }
      }]);

      return CadastreService;
    }();

    CadastreService.ɵfac = function CadastreService_Factory(t) {
      return new (t || CadastreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CadastreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CadastreService,
      factory: CadastreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/webmap/webmap.component.ts":
  /*!********************************************!*\
    !*** ./src/app/webmap/webmap.component.ts ***!
    \********************************************/

  /*! exports provided: WebmapComponent */

  /***/
  function srcAppWebmapWebmapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebmapComponent", function () {
      return WebmapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! esri-loader */
    "./node_modules/esri-loader/dist/umd/esri-loader.js");
    /* harmony import */


    var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _model_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/property */
    "./src/app/model/property.ts");
    /* harmony import */


    var _services_cadastre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/cadastre.service */
    "./src/app/services/cadastre.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["webMapViewNode"];

    function WebmapComponent_div_2_tbody_12_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WebmapComponent_div_2_tbody_12_tr_1_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var mk_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r7.getDetailFromRC(mk_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mk_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mk_r6.rc);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", mk_r6.address, " ", mk_r6.locInt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mk_r6.province);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mk_r6.town);
      }
    }

    function WebmapComponent_div_2_tbody_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WebmapComponent_div_2_tbody_12_tr_1_Template, 13, 5, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.properties);
      }
    }

    function WebmapComponent_div_2_tbody_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.error, " ");
      }
    }

    function WebmapComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Referencia Catastral");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Direcci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Provincia");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Municipio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WebmapComponent_div_2_tbody_12_Template, 2, 1, "tbody", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WebmapComponent_div_2_tbody_13_Template, 3, 1, "tbody", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.properties.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.properties.length == 0);
      }
    }

    function WebmapComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WebmapComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.propIsSelected = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "VOLVER");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DATOS DESCRIPTIVOS DEL INMUEBLE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "PARCELA CATASTRAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Referencia catastral: ", ctx_r1.propSelected.rc, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Localizaci\xF3n: ", ctx_r1.propSelected.completeAddress, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Uso principal: ", ctx_r1.propSelected.use, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Superficie construida: ", ctx_r1.propSelected.surfaceCons, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" A\xF1o construcci\xF3n: ", ctx_r1.propSelected.yearConstruction, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Participaci\xF3n del inmueble: ", ctx_r1.propSelected.participation, " %");
      }
    }

    var WebmapComponent = /*#__PURE__*/function () {
      function WebmapComponent(catastroService) {
        _classCallCheck(this, WebmapComponent);

        this.catastroService = catastroService;
        this.WMS_CADASTRE = 'http://ovc.catastro.meh.es/cartografia/INSPIRE/spadgcwms.aspx?';
        this.mapLoadedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(WebmapComponent, [{
        key: "initializeMap",
        value: function initializeMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var _yield$Object, _yield$Object2, _Map, MapView, Search, SpatialReference, GeometryService, ProjectParameters, WMSLayer, BasemapGallery, LayerList, Expand, cartography, layer, mapProperties, newSpatialReference, gsvc, map, mapViewProperties, searchWidget;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/geometry/SpatialReference', 'esri/tasks/GeometryService', 'esri/tasks/support/ProjectParameters', 'esri/layers/WMSLayer', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList', 'esri/widgets/Expand']);

                  case 3:
                    _yield$Object = _context.sent;
                    _yield$Object2 = _slicedToArray(_yield$Object, 10);
                    _Map = _yield$Object2[0];
                    MapView = _yield$Object2[1];
                    Search = _yield$Object2[2];
                    SpatialReference = _yield$Object2[3];
                    GeometryService = _yield$Object2[4];
                    ProjectParameters = _yield$Object2[5];
                    WMSLayer = _yield$Object2[6];
                    BasemapGallery = _yield$Object2[7];
                    LayerList = _yield$Object2[8];
                    Expand = _yield$Object2[9];
                    cartography = this.WMS_CADASTRE;
                    layer = new WMSLayer({
                      url: cartography
                    });
                    mapProperties = {
                      basemap: 'topo-vector'
                    };
                    newSpatialReference = new SpatialReference({
                      wkid: 25830
                    });
                    gsvc = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'); //map properties

                    map = new _Map(mapProperties);
                    map.add(layer);
                    mapViewProperties = {
                      container: this.mapViewEl.nativeElement,
                      center: [-0.3601076, 39.723488],
                      zoom: 10.2,
                      map: map
                    };
                    this.view = new MapView(mapViewProperties); // Search widget

                    searchWidget = new Search({
                      view: this.view
                    });
                    _context.next = 27;
                    return this.view.when(function () {
                      //layerlist section
                      var layerList = new LayerList({
                        view: _this3.view,
                        listItemCreatedFunction: function listItemCreatedFunction(evt) {
                          var item = evt.item;

                          if (item.title == 'Spanish General Directorate for Cadastre - INSPIRE View Services - WMS') {
                            item.title = 'Datos catastrales';
                          }
                        }
                      });

                      _this3.view.ui.add(layerList, 'top-right'); // basemap widget


                      var basemapGallery = new BasemapGallery({
                        view: _this3.view,
                        container: document.createElement('div')
                      });
                      var layerListExpand = new Expand({
                        expandIconClass: 'esri-icon-layer-list',
                        view: _this3.view,
                        content: basemapGallery
                      });

                      _this3.view.ui.add(layerListExpand, {
                        position: 'top-left'
                      }); // case navigation into map


                      _this3.view.on('click', function (evt) {
                        _this3.properties = [];
                        searchWidget.clear();

                        _this3.view.popup.clear();

                        if (searchWidget.activeSource) {
                          var geocoder = searchWidget.activeSource.locator;
                          var params = {
                            location: evt.mapPoint
                          };
                          geocoder.locationToAddress(params).then(function (response) {
                            var address = response.address;
                            var point = evt.mapPoint;

                            _this3.showPopup(address, point, _this3.view);

                            var params = new ProjectParameters({
                              geometries: [point],
                              outSpatialReference: newSpatialReference
                            });
                            var newGeometry;
                            gsvc.project(params).then(function (outGem) {
                              newGeometry = outGem[0];

                              _this3.getInfoFromCadastre(newGeometry.x, newGeometry.y);
                            });
                          }, function (err) {
                            _this3.showPopup('No address found.', evt.mapPoint, _this3.view);
                          });
                        }
                      });

                      _this3.properties = [];

                      _this3.view.ui.add(searchWidget, {
                        position: 'top-right',
                        index: 0
                      }); // case search in widget


                      searchWidget.on('select-result', function (event) {
                        _this3.properties = [];
                        var point = event.result.feature.geometry;
                        var params = new ProjectParameters({
                          geometries: [point],
                          outSpatialReference: newSpatialReference
                        });
                        var newGeometry;
                        gsvc.project(params).then(function (outGem) {
                          newGeometry = outGem[0];

                          _this3.getInfoFromCadastre(newGeometry.x, newGeometry.y);
                        });
                      });
                    });

                  case 27:
                    return _context.abrupt("return", this.view);

                  case 30:
                    _context.prev = 30;
                    _context.t0 = _context["catch"](0);
                    console.error('EsriLoader: ', _context.t0);

                  case 33:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 30]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.propSelected = new _model_property__WEBPACK_IMPORTED_MODULE_3__["Property"]('', '', '', '', '', '', '', '', '', '', '', '', '');
          this.properties = [];
          this.propIsSelected = false;
          this.initializeMap();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.view) {
            this.view.container = null;
          }
        }
      }, {
        key: "getInfoFromCadastre",
        value: function getInfoFromCadastre(x, y) {
          var _this4 = this;

          this.catastroService.getRCByCoordinates(x, y).subscribe(function (data) {
            var parser = new DOMParser();
            var dataFile = parser.parseFromString(data, 'text/xml');
            var err = dataFile.getElementsByTagName('err')[0];

            if (err !== undefined) {
              _this4.error = err.getElementsByTagName('des')[0].textContent;
            } else {
              var rc1 = dataFile.getElementsByTagName('pc1')[0].textContent;
              var rc2 = dataFile.getElementsByTagName('pc2')[0].textContent;
              var rcGeneral = rc1.concat(rc2);

              _this4.catastroService.getBuildingDetailsByRC(rcGeneral).subscribe(function (prop) {
                var parser2 = new DOMParser();
                var dataXML = parser2.parseFromString(prop, 'text/xml'); // case: when request is only one property

                var propertyOnly = dataXML.getElementsByTagName('bico')[0];

                if (propertyOnly !== undefined) {
                  var property = _this4.getInfoPropGeneral(propertyOnly);

                  _this4.properties.push(property);
                } else {
                  // case: when request are many properties
                  var properties = dataXML.getElementsByTagName('rcdnp');

                  for (var i = 0; i < properties.length; i++) {
                    var detail = properties[i];

                    var _property = _this4.getInfoPropGeneral(detail);

                    _this4.properties.push(_property);
                  }
                }
              });
            }
          });
        }
      }, {
        key: "getInfoPropGeneral",
        value: function getInfoPropGeneral(prop) {
          var rc1 = prop.getElementsByTagName('pc1')[0].textContent;
          var rc2 = prop.getElementsByTagName('pc2')[0].textContent;
          var rc3 = prop.getElementsByTagName('car')[0].textContent;
          var rc4 = prop.getElementsByTagName('cc1')[0].textContent;
          var rc5 = prop.getElementsByTagName('cc2')[0].textContent;
          var rc = '';
          rc = rc.concat(rc1, rc2, rc3, rc4, rc5);
          var tagAddr = prop.getElementsByTagName('dir')[0];
          var tagLocInt = prop.getElementsByTagName('loint')[0];
          var viaType = tagAddr.getElementsByTagName('tv')[0].textContent;
          var viaName = tagAddr.getElementsByTagName('nv')[0].textContent;
          var addNumber = tagAddr.getElementsByTagName('pnp')[0].textContent;
          var block = tagLocInt.getElementsByTagName('bq').length > 0 ? 'Bloque: ' + tagLocInt.getElementsByTagName('bq')[0].textContent : '';
          var stair = tagLocInt.getElementsByTagName('es').length > 0 ? 'Es: ' + tagLocInt.getElementsByTagName('es')[0].textContent : '';
          var plant = tagLocInt.getElementsByTagName('pt').length > 0 ? 'Pl: ' + tagLocInt.getElementsByTagName('pt')[0].textContent : '';
          var door = tagLocInt.getElementsByTagName('pu').length > 0 ? 'Pt: ' + tagLocInt.getElementsByTagName('pu')[0].textContent : '';
          var address = '';
          address = address.concat(viaType, ' ', viaName, ' ', addNumber);
          var postalCode = prop.getElementsByTagName('dp')[0].textContent;
          var prov = prop.getElementsByTagName('np')[0].textContent;
          var town = prop.getElementsByTagName('nm')[0].textContent;
          var logInt = '';
          logInt = logInt.concat(block, ' ', stair, ' ', plant, ' ', door);
          return new _model_property__WEBPACK_IMPORTED_MODULE_3__["Property"](rc, address, logInt, '', postalCode, prov, town, '', '', '', '', '', '');
        }
      }, {
        key: "showPopup",
        value: function showPopup(address, pt, view) {
          view.popup.open({
            title: +Math.round(pt.longitude * 100000) / 100000 + ", " + Math.round(pt.latitude * 100000) / 100000,
            content: address,
            location: pt
          });
        }
      }, {
        key: "getDetailFromRC",
        value: function getDetailFromRC(prop) {
          var _this5 = this;

          var rc = prop.rc;
          this.propIsSelected = true;
          this.catastroService.getBuildingDetailsByRC(rc).subscribe(function (prop) {
            var parser2 = new DOMParser();
            var dataXML = parser2.parseFromString(prop, 'text/xml');
            var properties = dataXML.getElementsByTagName('bico')[0];
            _this5.propSelected = _this5.convertToProperty(properties, rc);
          });
        }
      }, {
        key: "convertToProperty",
        value: function convertToProperty(info, rc) {
          var address = info.getElementsByTagName('ldt')[0].textContent;
          var use = info.getElementsByTagName('luso')[0].textContent;
          var surfaceCons = info.getElementsByTagName('sfc')[0].textContent;
          var year = info.getElementsByTagName('ant')[0].textContent;
          var surfaceGraph = info.getElementsByTagName('sfc')[0].textContent;
          var participation = info.getElementsByTagName('cpt').length > 0 ? info.getElementsByTagName('cpt')[0].textContent : '';
          return new _model_property__WEBPACK_IMPORTED_MODULE_3__["Property"](rc, '', '', surfaceCons, '', '', '', year, '', address, use, surfaceGraph, participation);
        }
      }]);

      return WebmapComponent;
    }();

    WebmapComponent.ɵfac = function WebmapComponent_Factory(t) {
      return new (t || WebmapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cadastre_service__WEBPACK_IMPORTED_MODULE_4__["CadastreService"]));
    };

    WebmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WebmapComponent,
      selectors: [["app-esri-map"]],
      viewQuery: function WebmapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapViewEl = _t.first);
        }
      },
      outputs: {
        mapLoadedEvent: "mapLoadedEvent"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "row"], [1, "col-md-4", "division", "no-padding"], ["class", "information", 4, "ngIf"], ["id", "detail", 4, "ngIf"], [1, "col-md-8", "division"], ["webMapViewNode", ""], [1, "information"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-link", 3, "click"], ["id", "detail"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-text"]],
      template: function WebmapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WebmapComponent_div_2_Template, 14, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WebmapComponent_div_3_Template, 23, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.propIsSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.propIsSelected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url('https://js.arcgis.com/4.14/esri/css/main.css');\n\n.esri-view[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.division[_ngcontent-%COMP%] {\n  border-width: 3px;\n  border-color: #888888;\n  border-style: solid;\n}\n\n.information[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: -0.062em;\n}\n\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VibWFwL3dlYm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDs7QUFFM0Q7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC93ZWJtYXAvd2VibWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTQvZXNyaS9jc3MvbWFpbi5jc3MnKTtcblxuLmVzcmktdmlldyB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5kaXZpc2lvbiB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItY29sb3I6ICM4ODg4ODg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxudGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNjJlbTtcbn1cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-esri-map',
          templateUrl: './webmap.component.html',
          styleUrls: ['./webmap.component.css']
        }]
      }], function () {
        return [{
          type: _services_cadastre_service__WEBPACK_IMPORTED_MODULE_4__["CadastreService"]
        }];
      }, {
        mapLoadedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapViewEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['webMapViewNode', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/claudiaperez/Documents/Doctorado/Trabajo/TrabajoGEOTEC/Modulees/ModuleesPrototipo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
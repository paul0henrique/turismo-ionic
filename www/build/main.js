webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\pages\home\home.html"*/'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet">\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Guia da cidade | Sobral</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Museu Dom José\n      </ion-card-title>\n      <p class="descricao">\n        Museu pertencente à Diocese de Sobral considerado o quinto museu de arte \n        sacra mais importante do Brasil, como mais de trinta mil peças em seu acervo. \n        Fundado pelo bispo diocesano Dom José Tupinambá da Frota em 29 de março de 1951, \n        o museu está instalado num palacete de estilo luso-brasileiro construído em 1844 \n        pelo major João Pedro Bandeira de Melo. O Museu Dom José possui coleções de porcelana, \n        cristal, imaginária, mobiliário, paleontologia, etnologia, arqueologia, armaria, \n        numismática, indumentária, ourivesaria, iconografia, adereços e acessórios. É uma instituição \n        ligada à arte, nacional e européia, dos séculos XVII, XVIII e XIX. Hoje é considerado o maior \n        Museu do Ceará e um dos maiores do Brasil em Arte-Sacra e Arte Decorativa, tornando-se assim, \n        um magnífico painel da história social de Sobral e municípios norte-cearenses.\n        \n      </p>\n      <img class="img-local" src="assets/imgs/dom.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Museu do Eclipse\n      </ion-card-title>\n      <p>\n        O Museu do Eclipse foi criado em 1999, pela Prefeitura Municipal de Sobral, \n        para comemoração dos 80 anos do fenômeno que ajudou a comprovar a Teoria da \n        Relatividade do físico e matemático Albert Einstein, ocorrido na manhã do dia \n        29 de maio de 1919. O Museu é hoje um ícone de divulgação histórica e científica, \n        estando acessível para visitantes de todas as idades. No Museu do Eclipse, estão \n        em exposição a luneta e as fotos originais utilizadas para comprovar a Teoria de Einstein, \n        além das fotos que registraram a presença da expedição científica em Sobral. Também pode-se \n        conferir fotos de galáxias e planetas, o primeiro mapa lunar do Brasil e o jornal The New York \n        Times que noticiou a comprovação da Teoria da Relatividade. Um simulador elétrico de eclipses \n        e réplicas movimentadas do Sistema Solar traduzem, de modo virtual, as experiências das expedições \n        astronômicas.\n      </p>\n      <img class="img-local" src="assets/imgs/eclipse.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Pinacoteca\n      </ion-card-title>\n      <p>\n        Pinacoteca de Sobral é um espaço expositivo de artes visuais. Com cerca de 250 obras \n        expostas, em 10 espaços temáticos, contendo desenhos, gravuras, pinturas esculturas e \n        elementos de origem arqueológica. Nomes como Dali, Picasso, Tarsila do Amaral, Raimundo \n        ela, Chico da Silva, Anita Mafalti, Djanira, Caribé, Bruno Giorgi, Ceschiatti e Almeida \n        Jr são encontrados na Pinacoteca de Sobral.\n      </p>\n      <img class="img-local" src="assets/imgs/pinacoteca.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Arco de Nossa Senhora de Fátima\n      </ion-card-title>\n      <p>\n        Situado na Av. Dr. Guarany, é um dos monumentos que mais caracterizam a cidade. Foi \n        construíudo por iniciativa de Dom José, em 1953, como marco da visita da imagem peregrina \n        de Nossa Senhora de Fátima a Sobral. O arco foi projetado por Falb Rangel e executado por \n        Francisco Frutuoso do Vale. No local, existia um cruzeiro chamado de Cruz das Almas, erguido \n        por iniciativa do missionário Frei Vidal da Penha, como símbolo de fé, na sua passagem por Sobral, \n        no final do século XVIII. A Cruz das Almas foi demolida em 1929. Por iniciativa de Dom José, o Arco \n        Nossa Senhora de Fátima foi construído em 1953, como marco da visita da imagem peregrina de Nossa Senhora \n        de Fátima a Sobral. Projetado por Falb Rangel, o Arco Nossa Senhora de Fátima foi executado por Francisco \n        Frutuoso do Vale, que também foi o autor da imagem de nossa senhora.\n      </p>\n      <img class="img-local" src="assets/imgs/arco.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Espelho D\'água\n      </ion-card-title>\n      <p>\n        Localizado na margem esquerda do rio Acaraú, o Espelho d\'água é um dos locais mais visitados \n        da cidade por conta dos seus morros que são usados como "grandes escorregadores" pela população,\n        não só por isso mas também porque é lá que fica um arco com o nome "Sobral" para que os visitantes \n        saibam que estão na cidade.No local há duas quadras,um campo de futebol e vários equipamentos usados \n        para a diversão das crianças.\n      </p>\n      <img class="img-local" src="assets/imgs/espelho.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="container-mapa">\n \n  <h1>Descubra locais em Sobral</h1>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63705.20367220275!2d-40.38561406030532!3d-3.683671663831287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954b6af4595227%3A0xe0ece6e4f3ec3d5b!2sSobral%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1629303096129!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.nome = '';
        this.assunto = '';
        this.mensagem = '';
    }
    ListPage.prototype.enviar = function () {
        console.log(this.nome);
        console.log(this.assunto);
        console.log(this.mensagem);
        this.showAlert();
    };
    ListPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Mensagem enviada!',
            subTitle: 'Obrigado por entrar em contato. Responderemos em breve.',
            buttons: ['OK']
        });
        alert.present();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\pages\list\list.html"*/'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet">\n\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img class="contato" src="assets/imgs/contato.gif"/>\n</ion-content>\n\n<ion-content>\n\n  <ion-list>\n\n    <img class="contato" src="assets/imgs/contato.gif"/>\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="nome"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Assunto</ion-label>\n      <ion-input type="text" [(ngModel)]="assunto"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Mensagem</ion-label>\n      <ion-input type="text" [(ngModel)]="mensagem"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button full (click)="enviar()">Enviar mensagem</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Contato', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\Ionic\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
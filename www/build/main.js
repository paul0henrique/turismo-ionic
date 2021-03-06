webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		270,
		0
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\home\home.html"*/'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet">\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Guia da cidade</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Museu Dom Jos??\n      </ion-card-title>\n      <p class="descricao">\n        Museu pertencente ?? Diocese de Sobral considerado o quinto museu de arte \n        sacra mais importante do Brasil, como mais de trinta mil pe??as em seu acervo. \n        Fundado pelo bispo diocesano Dom Jos?? Tupinamb?? da Frota em 29 de mar??o de 1951, \n        o museu est?? instalado num palacete de estilo luso-brasileiro constru??do em 1844 \n        pelo major Jo??o Pedro Bandeira de Melo. O Museu Dom Jos?? possui cole????es de porcelana, \n        cristal, imagin??ria, mobili??rio, paleontologia, etnologia, arqueologia, armaria, \n        numism??tica, indument??ria, ourivesaria, iconografia, adere??os e acess??rios. ?? uma institui????o \n        ligada ?? arte, nacional e europ??ia, dos s??culos XVII, XVIII e XIX. Hoje ?? considerado o maior \n        Museu do Cear?? e um dos maiores do Brasil em Arte-Sacra e Arte Decorativa, tornando-se assim, \n        um magn??fico painel da hist??ria social de Sobral e munic??pios norte-cearenses.\n        \n      </p>\n      <img class="img-local" src="assets/imgs/dom.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Museu do Eclipse\n      </ion-card-title>\n      <p>\n        O Museu do Eclipse foi criado em 1999, pela Prefeitura Municipal de Sobral, \n        para comemora????o dos 80 anos do fen??meno que ajudou a comprovar a Teoria da \n        Relatividade do f??sico e matem??tico Albert Einstein, ocorrido na manh?? do dia \n        29 de maio de 1919. O Museu ?? hoje um ??cone de divulga????o hist??rica e cient??fica, \n        estando acess??vel para visitantes de todas as idades. No Museu do Eclipse, est??o \n        em exposi????o a luneta e as fotos originais utilizadas para comprovar a Teoria de Einstein, \n        al??m das fotos que registraram a presen??a da expedi????o cient??fica em Sobral. Tamb??m pode-se \n        conferir fotos de gal??xias e planetas, o primeiro mapa lunar do Brasil e o jornal The New York \n        Times que noticiou a comprova????o da Teoria da Relatividade. Um simulador el??trico de eclipses \n        e r??plicas movimentadas do Sistema Solar traduzem, de modo virtual, as experi??ncias das expedi????es \n        astron??micas.\n      </p>\n      <img class="img-local" src="assets/imgs/eclipse.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Pinacoteca\n      </ion-card-title>\n      <p>\n        Pinacoteca de Sobral ?? um espa??o expositivo de artes visuais. Com cerca de 250 obras \n        expostas, em 10 espa??os tem??ticos, contendo desenhos, gravuras, pinturas esculturas e \n        elementos de origem arqueol??gica. Nomes como Dali, Picasso, Tarsila do Amaral, Raimundo \n        ela, Chico da Silva, Anita Mafalti, Djanira, Carib??, Bruno Giorgi, Ceschiatti e Almeida \n        Jr s??o encontrados na Pinacoteca de Sobral.\n      </p>\n      <img class="img-local" src="assets/imgs/pinacoteca.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Arco de Nossa Senhora de F??tima\n      </ion-card-title>\n      <p>\n        Situado na Av. Dr. Guarany, ?? um dos monumentos que mais caracterizam a cidade. Foi \n        constru??udo por iniciativa de Dom Jos??, em 1953, como marco da visita da imagem peregrina \n        de Nossa Senhora de F??tima a Sobral. O arco foi projetado por Falb Rangel e executado por \n        Francisco Frutuoso do Vale. No local, existia um cruzeiro chamado de Cruz das Almas, erguido \n        por iniciativa do mission??rio Frei Vidal da Penha, como s??mbolo de f??, na sua passagem por Sobral, \n        no final do s??culo XVIII. A Cruz das Almas foi demolida em 1929. Por iniciativa de Dom Jos??, o Arco \n        Nossa Senhora de F??tima foi constru??do em 1953, como marco da visita da imagem peregrina de Nossa Senhora \n        de F??tima a Sobral. Projetado por Falb Rangel, o Arco Nossa Senhora de F??tima foi executado por Francisco \n        Frutuoso do Vale, que tamb??m foi o autor da imagem de nossa senhora.\n      </p>\n      <img class="img-local" src="assets/imgs/arco.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-local">\n    <ion-card-content>\n      <ion-card-title class="local-title">\n        Espelho D\'??gua\n      </ion-card-title>\n      <p>\n        Localizado na margem esquerda do rio Acara??, o Espelho d\'??gua ?? um dos locais mais visitados \n        da cidade por conta dos seus morros que s??o usados como "grandes escorregadores" pela popula????o,\n        n??o s?? por isso mas tamb??m porque ?? l?? que fica um arco com o nome "Sobral" para que os visitantes \n        saibam que est??o na cidade.No local h?? duas quadras,um campo de futebol e v??rios equipamentos usados \n        para a divers??o das crian??as.\n      </p>\n      <img class="img-local" src="assets/imgs/espelho.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="container-mapa">\n \n  <h1>Descubra locais em Sobral</h1>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63705.20367220275!2d-40.38561406030532!3d-3.683671663831287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954b6af4595227%3A0xe0ece6e4f3ec3d5b!2sSobral%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1629303096129!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-list',template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\list\list.html"*/'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet">\n\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img class="contato" src="assets/imgs/contato.gif"/>\n</ion-content>\n\n<ion-content>\n\n  <ion-list>\n\n    <img class="contato" src="assets/imgs/contato.gif"/>\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="nome"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Assunto</ion-label>\n      <ion-input type="text" [(ngModel)]="assunto"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Mensagem</ion-label>\n      <ion-input type="text" [(ngModel)]="mensagem"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <button ion-button full (click)="enviar()">Enviar mensagem</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(99);
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
            { title: 'In??cio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\about\about.html"*/'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet">\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="titulo">Sobre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="container-content">\n    \n    <ion-card-content>\n      <ion-card-title class="content-title">\n        A cidade\n      </ion-card-title>\n      <p class="descricao">\n        Sobral ?? um munic??pio brasileiro no interior do estado do Cear?? topicoizado entre duas \n        grandes capitais, Fortaleza, a cerca de 230 km, 5?? maior capital do pa??s e Teresina, \n        capital do Piau??, contentizada a 360 km. Com uma popula????o de 210.711 habitantes, conforme \n        estimativa do IBGE de 2020, ?? o quinto munic??pio mais povoado do estado e o segundo maior \n        do interior. Com uma taxa de urbaniza????o de 88,35%. Sobral ?? o segundo munic??pio mais desenvolvido \n        do estado do Cear??, atr??s apenas de Fortaleza, de acordo com o IDH (??ndice de Desenvolvimento Humano).\n        \n      </p>\n      <img class="img-content" src="assets/imgs/arco2.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-content">\n    <ion-card-content>\n      <ion-card-title class="content-title">\n        Arquitetura\n      </ion-card-title>\n      <p>\n        H??, em Sobral, cinco grandes grupos arquitet??nicos:\n        O primeiro ?? o da Pra??a S??o Jo??o, em torno da Pra??a.\n        O segundo ?? o trecho que vai da Igreja das Dores at?? a Igreja do Ros??rio, pegando a rua Ernesto Deocleciano.\n        O terceiro, o conjunto de casas em estilo Art. Noveau da Pra??a Jo??o Pessoa.\n        O quarto, o trecho que vai do Arco de Nossa Senhora de F??tima at?? a Pra??a Dr. Jos?? Sab??ia (antiga Coluna da Hora).\n        O quinto s??o as casas e monumentos isolados (O Patronato, chamado Out??o Enobrecido; uma casa ao lado da loja Od??sio Cunha; o Col??gio Sant\'Ana; \n        o sobradinho da Casa Samuel, na rua Ernesto Deocleciano; o pr??dio do Radier; e o Teatro S??o Jo??o).\n      </p>\n      <img class="img-content" src="assets/imgs/arquitetura.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="container-content">\n    <ion-card-content>\n      <ion-card-title class="content-title">\n        Pol??tica\n      </ion-card-title>\n      <p>\n        A administra????o municipal executiva de Sobral ?? exercida pelo prefeito Ivo Gomes (PDT). O Poder Legislativo ?? exercido por 21 vereadores que comp??em \n        a C??mara Municipal de Sobral, tendo como fun????es fiscalizar o executivo e discutir as leis no ??mbito municipal. O Poder Judici??rio se faz presente na \n        cidade com a Justi??a Federal (uma vara e um juizado especial), Justi??a Estadual (cinco varas e dois juizados especiais), Justi??a do Trabalho (uma vara) \n        e Justi??a Eleitoral (duas zonas eleitorais). Sobral possui, de acordo com dados de 2012 do TRE-CE, um col??gio eleitoral de 131.417 eleitores, duas zonas \n        eleitorais: a 24?? zona e a 121?? zona, com um total de 107 locais de vota????o com 456 se????es eleitorais.\n      </p>\n      <img class="img-content" src="assets/imgs/camara.jpg"/>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\IFCE\Bolsa CIDTS\Treinamento\ionic-turismo\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map
webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  new Swiper('.myHero', {\n    spaceBetween: 30,\n    centeredSlides: true,\n    autoplay: {\n      delay: 3000,\n      disableOnInteraction: false\n    },\n    navigation: {\n      nextEl: '.heroF',\n      prevEl: '.heroS'\n    }\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#menu\").on(\"click\", \"a\", function (event) {\n    //отменяем стандартную обработку нажатия по ссылке\n    event.preventDefault(); //забираем идентификатор бока с атрибута href\n\n    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n        //узнаем высоту от начала страницы до блока на который ссылается якорь\n    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top; //анимируем переход на расстояние - top за 1500 мс\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({\n      scrollTop: top\n    }, 2500);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#scroll\").on(\"click\", \"a\", function (event) {\n    //отменяем стандартную обработку нажатия по ссылке\n    event.preventDefault(); //забираем идентификатор бока с атрибута href\n\n    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n        //узнаем высоту от начала страницы до блока на который ссылается якорь\n    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top; //анимируем переход на расстояние - top за 1500 мс\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({\n      scrollTop: top\n    }, 2500);\n  });\n});\nlet swiper = new Swiper('.newsSlide', {\n  slidesPerView: 3,\n  spaceBetween: 30,\n  slidesPerGroup: 3,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  }\n});\n\nfunction largePoint() {\n  let x = document.getElementById('seem');\n  x.style.backgroundColor = 'red';\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})
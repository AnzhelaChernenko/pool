webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  new Swiper('.myHero', {\n    spaceBetween: 30,\n    centeredSlides: true,\n    autoplay: {\n      delay: 3000,\n      disableOnInteraction: false\n    },\n    navigation: {\n      nextEl: '.heroF',\n      prevEl: '.heroS'\n    }\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#menu\").on(\"click\", \"a\", function (event) {\n    //отменяем стандартную обработку нажатия по ссылке\n    event.preventDefault(); //забираем идентификатор бока с атрибута href\n\n    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n        //узнаем высоту от начала страницы до блока на который ссылается якорь\n    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top; //анимируем переход на расстояние - top за 1500 мс\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({\n      scrollTop: top\n    }, 2500);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#scroll\").on(\"click\", \"a\", function (event) {\n    //отменяем стандартную обработку нажатия по ссылке\n    event.preventDefault(); //забираем идентификатор бока с атрибута href\n\n    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n        //узнаем высоту от начала страницы до блока на который ссылается якорь\n    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top; //анимируем переход на расстояние - top за 1500 мс\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({\n      scrollTop: top\n    }, 2500);\n  });\n});\nlet swiper = new Swiper('.newsSlide', {\n  slidesPerView: 3,\n  spaceBetween: 30,\n  slidesPerGroup: 3,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#ass\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seem\").css('background-color', 'white');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#ass\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seem\").css('background-color', 'transparent');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#aboutA\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemA\").css('background-color', '#6387f2');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#aboutA\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemA\").css('background-color', 'transparent');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#newsN\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemN\").css('background-color', 'white');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#newsN\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemN\").css('background-color', 'transparent');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#galleryG\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemG\").css('background-color', '#6387f2');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#galleryG\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemG\").css('background-color', 'transparent');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#contactC\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemC\").css('background-color', 'white');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#contactC\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#seemC\").css('background-color', 'transparent');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#name\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#email\").css('opacity', '0.2');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#name\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#email\").css('opacity', '1');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#email\").mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#name\").css('opacity', '0.2');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#email\").mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#name\").css('opacity', '1');\n});\n\nif (window.matchMedia('(max-width: 735px)').matches) {\n  let swiper = new Swiper('.newsSlide', {\n    slidesPerView: 2,\n    spaceBetween: 10,\n    slidesPerGroup: 2,\n    loop: true,\n    loopFillGroupWithBlank: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n}\n\nif (window.matchMedia('(max-width: 623px)').matches) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.logo').after('<div class=\"burger\"><i class=\"fa fa-align-justify \"></i></div>');\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger').css('display', 'block');\n}\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger').mouseover(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content__motto').prepend('<ul class=\"burger__list\">' + ' <li class=\"burger__menu\">ABOUT US</li>' + '<li class=\"burger__menu\">PRODUCTS</li>' + '<li class=\"burger__menu\">NEWS</li>' + '<li class=\"burger__menu\">CONTACTS</li>' + '</ul>');\n});\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger').mouseout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content__motto').css('display', 'none');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})
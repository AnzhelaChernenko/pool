webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#aboutUs\").on(\"click\", \"a\", function (event) {\n    event.preventDefault();\n    let id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n        top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top;\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({\n      scrollTop: top\n    }, 3500);\n  });\n});\nlet swiper = new Swiper('.swiper-container', {\n  slidesPerView: 3,\n  spaceBetween: 30,\n  slidesPerGroup: 3,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})
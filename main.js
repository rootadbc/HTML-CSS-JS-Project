/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"tab-page\", \"contact\");\n\n  const heading = document.createElement(\"h2\");\n  heading.textContent = \"Contact Us\";\n\n  const address = document.createElement(\"p\");\n  address.textContent = \"123 Breakfast Street, Earth, Universe\";\n\n  const phone = document.createElement(\"p\");\n  phone.textContent = \"Phone: +123 000 000 0000\";\n\n  const email = document.createElement(\"p\");\n  email.textContent = \"Email: restaurant@breakfastbar.com\";\n\n  contact.appendChild(heading);\n  contact.appendChild(address);\n  contact.appendChild(phone);\n  contact.appendChild(email);\n\n  document.querySelector(\"#content\").appendChild(contact);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"tab-page\", \"home\");\n\n  const heading = document.createElement(\"h2\");\n  heading.textContent = \"Welcome to Breakfast Bar\";\n\n  const text = document.createElement(\"p\");\n  text.textContent =\n    \"Fresh breakfast, warm coffee, and a cozy place to start your day.\";\n\n  const image = document.createElement(\"img\");\n  image.src =\n  \"https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/fb9f0a29-7d88-5300-9960-4a9cb8156b74/7da5f5dc-e8dd-52de-a1a7-c2d22f6563c3.jpg\";\n  image.alt = \"Breakfast food on a table\";\n\n  home.appendChild(heading);\n  home.appendChild(text);\n  home.appendChild(image);\n\n  // The module appends itself to #content\n  document.querySelector(\"#content\").appendChild(home);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"site-footer\");\n\n  const text = document.createElement(\"p\");\n  text.textContent = \"Created by rootadbc\";\n\n  const links = document.createElement(\"div\");\n  links.classList.add(\"social-links\");\n\n  const socials = [\n    { name: \"GitHub\", url: \"https://github.com/rootadbc\" },\n    { name: \"LinkedIn\", url: \"https://www.linkedin.com/in/rootadbc\" },\n    { name: \"X\", url: \"https://x.com/rootadbc\" },\n    { name: \"Instagram\", url: \"https://www.instagram.com/rootadbc\" },\n  ];\n\n  socials.forEach((social) => {\n    const link = document.createElement(\"a\");\n    link.href = social.url;\n    link.textContent = social.name;\n    link.target = \"_blank\";\n    link.rel = \"noopener noreferrer\";\n\n    links.appendChild(link);\n  });\n\n  footer.appendChild(text);\n  footer.appendChild(links);\n\n  return footer;\n}\n\nfunction switchTab(tabFunction) {\n  document.querySelector(\"#content\").innerHTML = \"\";\n  tabFunction();\n}\n\n// Show the Home tab when the page first loads\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\ndocument.querySelector(\"#home\").addEventListener(\"click\", () => {\n  switchTab(_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\ndocument.querySelector(\"#menu\").addEventListener(\"click\", () => {\n  switchTab(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\ndocument.querySelector(\"#contact\").addEventListener(\"click\", () => {\n  switchTab(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n// Add the footer once, outside #content, so it stays on every tab\ndocument.body.appendChild(createFooter());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"tab-page\", \"menu\");\n\n  const heading = document.createElement(\"h2\");\n  heading.textContent = \"Our Menu\";\n\n  const menuList = document.createElement(\"ul\");\n\n  const items = [\n    \"Pancakes — $8\",\n    \"French Toast — $9\",\n    \"Omelette — $10\",\n    \"Breakfast Burrito — $11\",\n    \"Fresh Fruit Bowl — $7\",\n    \"Coffee — $3\",\n  ];\n\n  items.forEach((item) => {\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = item;\n    menuList.appendChild(listItem);\n  });\n\n  menu.appendChild(heading);\n  menu.appendChild(menuList);\n\n  document.querySelector(\"#content\").appendChild(menu);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
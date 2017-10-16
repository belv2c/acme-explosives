(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require('./dom');

let categories = [];
let types = [];
let details = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories);
		}).fail((error1) => {
			reject(error1);
		});
	});
};

const typesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/types.json').done((data2) => {
			resolve(data2.types);
		}).fail((error2) => {
			reject(error2);
		});
	});
};

const detailsJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/details.json').done((data3) => {
			resolve(data3.types);
		}).fail((error3) => {
			reject(error3);
		});
	});
};


module.exports = {categoriesJSON};


},{"./dom":2}],2:[function(require,module,exports){
"use strict";

let productDiv = $('#productDiv');

const buildDomString = (products) => {
	for (let i = 0; i < products.length; i++) {
	let domString = "";
	domString += `<div class="productOutput">`;
	domString += 	`<h2> ${products.name} </h2>`;
	domString +=	`<h4> ${products.categoryName} </h4>`;
	domString +=	`<h4> ${products.typeName} </h4>`;
	domString +=	`<h5> ${products.description} </h5>`;
	domString += `</div>`;
	writeToDom(domString);
  }
};

const writeToDom = (strang) => {
	productDiv.append(strang);
};

module.exports = {buildDomString};
},{}],3:[function(require,module,exports){
"use strict";

console.log("main.js");

const data = require("./data");

$(document).ready(() => {
	/*data.initializer();*/
});
},{"./data":1}]},{},[3]);

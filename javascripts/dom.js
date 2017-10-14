"use strict";

let productDiv = $('#product-input');

const buildDomString = (products) => {
	let domString = "";
	domString += `<div>`;
	domString += `<div> ${products.name}`;
	domString += `</div>`;

};

const writeToDom = (strang) => {
	productDiv.append(strang);
};

module.exports = buildDomString;
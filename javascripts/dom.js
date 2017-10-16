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

module.exports = buildDomString;
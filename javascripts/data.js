"use strict";

const dom = require('./dom');


let categoriesArray = [];
let typesArray = [];
let detailsArray = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories);
			
		}).fail((error) => {
			reject(error);
		});
	});
};

const typesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/types.json').done((data2) => {
			resolve(data2.types);
			
		}).fail((error) => {
			reject(error);
		});
	});
};

const detailsJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/details.json').done((data3) => {
			resolve(data3.details);
		}).fail((error) => {
			reject(error);
		});
	});
};

const productGetter = () => {
	categoriesJSON().then((categoryStuff) => {
		categoryStuff.forEach((category) => {
			categoriesArray.push(category);
		});
		return typesJSON();
		
	}).then((typeStuff) => {
		typeStuff.forEach((type) => {
			typesArray.push(type);
		});
	});	
};


const initializer = () => {
	productGetter();
	console.log("hi");
};

/*const getProducts = () => {
	return productArray;
};*/

module.exports = {initializer};


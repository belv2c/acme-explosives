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


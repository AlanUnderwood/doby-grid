/*jslint browser:true,expr:true,vars:true,plusplus:true,devel:true,indent:4,maxerr:50*/
/*jshint white: true*/
/*global _, $, define*/

define(['faker'], function (Faker) {
	"use strict";

	// Generate Grid Options
	return [function () {

		// Create some faker data
		var fakedata = [];
		for (var j = 0; j < 100; j++) {
			fakedata.push({
				name: Faker.Name.findName(),
				email: Faker.Internet.email(),
				company: Faker.Company.companyName(),
				lorem: Faker.Lorem.words(20).join(' ')
			});
		}

		// Generate Data
		var data = [], fd;
		for (var i = 0; i < 500000; i++) {
			fd = fakedata[_.sample(_.range(0, 100))];
			fd.id = i;
			data.push({
				id: i,
				data: fd
			});
		}

		// Generate Columns
		var columns = [];
		for (var q = 0; q < 5; q++) {
			columns.push({
				id: "id" + q,
				name: "ID",
				field: "id",
				sortable: true,
				tooltip: "ID of the item"
			}, {
				id: "name" + q,
				name: "Name",
				field: "name",
				minWidth: 100,
				sortable: true,
				tooltip: "This is the name of the individual"
			}, {
				id: "email" + q,
				name: "Email",
				field: "email",
				sortable: true,
				tooltip: "Their email address"
			}, {
				id: "company" + q,
				name: "Company",
				field: "company",
				sortable: true,
				tooltip: "The user's company"
			}, {
				id: "random" + q,
				name: "Random Words",
				field: "lorem",
				sortable: true,
				tooltip: "Some random words"
			});
		}

		return {
			columns: columns,
			data: data
		};
	}];
});
// doby-grid.js
// (c) 2013 Evgueni Naverniouk, Globex Designs, Inc.
// Doby may be freely distributed under the MIT license.
// For all details and documentation:
// https://github.com/globexdesigns/doby-grid

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50*/

describe("Rendering", function () {

	// Will hold references to the fixture container and the grid instance
	var fixture, grid;

	// Default options for the grid
	var options = {
		columns: [{
			id: "id",
			name: "ID",
			field: "id"
		}, {
			id: "name",
			name: "Name",
			field: "name"
		}],
		data: [{
			data: {
				id: 1,
				name: "Some Name"
			}
		}]
	}


	// ==========================================================================================


	it("should append the grid to a container via appendTo()", function () {
		// Create a new grid inside a fixture
		fixture = setFixtures('<div id="text-container"></div>')
		grid = new DobyGrid(options).appendTo(fixture)

		expect(fixture).toExist()
		expect(fixture).toContain('div.doby-grid')
	})


	// ==========================================================================================


	it("should return a DobyGrid object via appendTo()", function () {
		expect(grid instanceof DobyGrid).toEqual(true)
		expect(typeof(grid)).toEqual('object')
	})


	// ==========================================================================================


	describe("Column Headers", function () {


		it("should render the expected number of column headers", function () {
			expect(grid.$el.find('.doby-grid-header-column').length).toEqual(options.columns.length)
		})


	})


	// ==========================================================================================


	describe("Grid Body", function () {


		it("should render the expected number of columns for every row", function () {
			expect(grid.$el.find('.doby-grid-row:first .doby-grid-cell').length).toEqual(options.columns.length)
		})


	})


})
// from data.js
var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function(UFO) {
   console.log(UFO);
});
//loop through each object and populate a cell with its data in the table row
tableData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

//event handlers:
button.on("click", runFilter);
form.on("submit", runFilter);

//function that will run when a date is entered in the form 
//and either enter is pressed or the button is clicked:
function runFilter() {
    //prevents page from refreshing when filtered
    d3.event.preventDefault();

    //obtain the value input into the area of the html with the datetime id:
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //filter the data loaded from the data.js file based on the inputValue
    var filteredTableData = tableData.filter(UFO => UFO.datetime === inputValue);

    console.log(filteredTableData);

    //clear the current loaded table from the html:
    tbody.html("");

    //populate the table off filtered object criteria:
    filteredTableData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
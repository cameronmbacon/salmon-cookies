'use strict';

/*
 * This is an application for a fake business called Salmon Cookies
 * Created By: Cameron Bacon on 02/13/2017
 * Last Modified: 02/13/2017
*/

// ----------DECLARE AND INITIALIZE VARIABLES----------
var jarEl = document.createElement('table'); // creates <table></table>
var tableBodyEl = document.createElement('tbody'); // creates <tbody></tbody>
var sectionEl = document.getElementById('main-content');

// --------------CONSTRUCTOR FUNCTION--------------
function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hoursOpenPerDay = 15;
  this.simulatedSales = [];
}

// --------------METHODS--------------
// Calculates simulated sales and pushes them to simulatedSales array
// NOW WITH RANDOM NUMBER GENERATING CAPABILITIES!!!
CookieStore.prototype.generateSimulatedHourlySales = function() {
  var range = this.maxHourlyCustomers - this.minHourlyCustomers;
  var simSales;
  var total = 0;
  for (var i = 0; i < this.hoursOpenPerDay; i++) {
    var randNumCustomers = Math.floor((Math.random() * range + 1) + this.minHourlyCustomers);
    simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
    this.simulatedSales.push(simSales);
    total += simSales;
  }
  this.simulatedSales.push(total);
};

//Creates element nodes for table, populates them with data and renders to page
CookieStore.prototype.renderToTable = function() {
  var rowEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  rowEl.appendChild(thEl);
  for (var i = 0; i <= this.hoursOpenPerDay; i++) {
    var tableDataEl = document.createElement('td'); // <td></td>
    tableDataEl.textContent = this.simulatedSales[i];
    rowEl.appendChild(tableDataEl);
  }
  jarEl.appendChild(rowEl);
};

// ------------FUNCTION DECLARATIONS------------
// This function renders the table header to the sales page
function generateTableHeader() {
  var hours = 17;
  var tableHeaderEl = document.createElement('thead'); // <thead></thead>
  var rowEl = document.createElement('tr'); // <tr></tr>
  for (var i = 0; i <= hours; i++) {
    if (i === 0) {
      var thEl = document.createElement('th'); // <th></th> stays blank
      rowEl.appendChild(thEl);
    } else if (i > 0 && i < hours) {
      var thEl = document.createElement('th');
      if (i < 7) {
        thEl.textContent = 5 + i + 'am';
        rowEl.appendChild(thEl);
      } else if (i === 7) {
        thEl.textContent = 5 + i + 'pm';
        rowEl.appendChild(thEl);
      } else {
        thEl.textContent = i - 7 + 'pm';
        rowEl.appendChild(thEl);
      }
    } else {
      thEl.textContent = 'Daily Location Total';
      rowEl.appendChild(thEl);
    }
  }
  tableHeaderEl.appendChild(rowEl);
  jarEl.appendChild(tableHeaderEl);
};

// This function renders the table footer to the sales page
function generateTableFooter() {
  var hours = 17;
  var tableFooterEl = document.createElement('tfoot'); // <tfoot></tfoot>
  var rowEl = document.createElement('tr'); // <tr></tr>
  var hourlyTotal = 0;
  var grandTotal = 0;
  for (var i = 0; i <= hours; i++) {
    if (i === 0) {
      var tableDataEl = document.createElement('td'); // <td></td>
      tableDataEl.textContent = 'Totals';
      rowEl.appendChild(tableDataEl);
    } else if (i > 0 && i < hours) {
      for (var j = 0; j < stores.length; j++) {
        hourlyTotal += stores[j].simulatedSales[i - 1];
      }
      tableDataEl.textContent = hourlyTotal;
      rowEl.appendChild(tableDataEl);
      grandTotal += hourlyTotal;
      hourlyTotal = 0;
    } else {
      var tableDataEl = document.createElement('td');
      tableDataEl.textContent = grandTotal;
    }
  }
  tableFooterEl.appendChild(rowEl);
  jarEl.appendChild(tableFooterEl);
};

// Creating objects using constructor function
var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
var seaTacAirport = new CookieStore('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

// this array contains my objects
var stores = [pikePlace, seaTacAirport, seattleCenter, capitolHill, alki];

// ------------START APPLICATION------------
for (var i = 0; i < stores.length; i++) {
  stores[i].generateSimulatedHourlySales();
}

generateTableHeader();

for (var i = 0; i < stores.length; i++) {
  stores[i].renderToTable();
  console.log(stores[i].simulatedSales);
}

//generateTableFooter();

sectionEl.appendChild(jarEl);

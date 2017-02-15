'use strict';

/*
 * This is an application for a fake business called Salmon Cookies
 * Created By: Cameron Bacon on 02/13/2017
 * Last Modified: 02/15/2017
*/

// ----------DECLARE AND INITIALIZE VARIABLES----------
var kalEl = document.createElement('table'); // creates <table></table>
var tableBodyEl = document.createElement('tbody'); // creates <tbody></tbody>
var jorEl = document.getElementById('main-content'); // outer-most parent node to append child to

// --------------CONSTRUCTOR FUNCTION--------------
function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hoursOpenPerDay = 15; // assigned 15 in constructor function since each store is open 6am - 8am
  this.simulatedSales = []; // randNumcustomers * avgCookiesPerCustomer pushed into this array
}

// ----------------METHODS----------------
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

//Creates element nodes for table, then populates them with data and renders to page
CookieStore.prototype.renderToTable = function() {
  var rowEl = document.createElement('tr'); //<tr></tr>
  var thEl = document.createElement('th'); //<th></th>
  thEl.textContent = this.storeName;
  rowEl.appendChild(thEl);
  for (var i = 0; i <= this.hoursOpenPerDay; i++) {
    var tableDataEl = document.createElement('td'); //<td></td>
    tableDataEl.textContent = this.simulatedSales[i]; //<td>number from array</td>
    rowEl.appendChild(tableDataEl);
  }
  kalEl.appendChild(rowEl);
};

// ------------FUNCTION DECLARATIONS------------
//This function renders the table header to the sales page
function generateTableHeader() {
  var tHCount = 17;  //there are 16 <th></th> elements to be created after the blank
  var tableHeaderEl = document.createElement('thead'); //<thead></thead>
  var rowEl = document.createElement('tr'); //<tr></tr>
  for (var i = 0; i <= tHCount; i++) {
    if (i === 0) {
      var thEl = document.createElement('th'); //<th></th> stays blank
      rowEl.appendChild(thEl);
    } else if (i > 0 && i < tHCount) {
      var thEl = document.createElement('th'); //<th></th>
      if (i < 7) {
        thEl.textContent = 5 + i + ':00am';
        rowEl.appendChild(thEl);
      } else if (i === 7) {
        thEl.textContent = 5 + i + ':00pm';
        rowEl.appendChild(thEl);
      } else {
        thEl.textContent = i - 7 + ':00pm';
        rowEl.appendChild(thEl);
      }
    } else {
      thEl.textContent = 'Daily Location Total';
      rowEl.appendChild(thEl);
    }
  } //end of loop at i <= 17 because final thEl is appended within the loop
  tableHeaderEl.appendChild(rowEl);
  kalEl.appendChild(tableHeaderEl);
};

//This function renders the table footer to the sales page
function generateTableFooter() {
  var tHCount = 17; //total of 17 td's and th's to be made in table footer
  var tableFooterEl = document.createElement('tfoot'); //<tfoot></tfoot>
  var rowEl = document.createElement('tr'); //<tr></tr>
  var hourlyTotal = 0;
  var grandTotal = 0;
  for (var i = 0; i <= tHCount; i++) {
    if (i === 0) {
      var tHeaderEl = document.createElement('th'); //<th></th>
      tHeaderEl.textContent = 'Totals';
      rowEl.appendChild(tHeaderEl);
    } else if (i > 0 && i < tHCount) {
      for (var j = 0; j < stores.length; j++) {
        hourlyTotal += stores[j].simulatedSales[i - 1];
      }
      var tableTotalsEl = document.createElement('td');
      tableTotalsEl.textContent = hourlyTotal;
      rowEl.appendChild(tableTotalsEl);
      grandTotal += hourlyTotal;
      hourlyTotal = 0; //assigned 0 to begin adding each store's total for the next hour
    }
  }
  tableFooterEl.appendChild(rowEl);
  kalEl.appendChild(tableFooterEl);
};

// Creating objects for each location using constructor function
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
  console.log(stores[i].simulatedSales);
} //ensures arrays are populated with new data before rendering the table

generateTableHeader();

for (var i = 0; i < stores.length; i++) {
  stores[i].renderToTable();
} //renders table row for each object in my stores array

generateTableFooter(); //renders the hourly totals and grand total to the table footer

jorEl.appendChild(kalEl);

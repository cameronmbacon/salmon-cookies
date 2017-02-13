'use strict';

/* This is an application for a fake business called Salmon Cookies
 * Created By: Cameron Bacon on 02/13/2017
 * Last Modified: 02/13/2017
*/

//1st and Pike location
var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.floor(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  }
};

//SeaTac Airport location
var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.floor(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  }
};

//Seattle Center location
var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.floor(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  }
};

//Capitol Hill location
var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.floor(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  }
};

//Alki location
var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.floor(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  }
};

// var userFullName = prompt('Please enter your full name');
// var userEmail = prompt('Please enter your email');
//
// var myUser = {
//   fullName: userFullName,
//   email: userEmail,
//   login: function() {
//     console.log(this.fullName + ' has now logged in!');
//   }
// };
//
// console.log('-------------NEW USER---------------');
// console.log(myUser);
//
// myUser.login();
//
// console.log('-------------PRESENT ELEMENTS---------------');
//
// var userElement = document.createElement('h1'); //STEP 1: create element OR access element from DOM.
// // userElement = <h1></h1>
//
// userElement.setAttribute('id', 'first-user-heading'); //STEP 2: assign any attributes and text content.
// // userElement = <h1 id="first-user-heading"></h1>
//
// userElement.textContent = myUser.fullName;
// // userElement = <h1 id="first-user-heading">User's full name</h1>
//
// var sectionEl = document.getElementById('main-content'); //got reference
// // sectionEl = <section id="main-content"></section> <-- from our index.html
//
// sectionEl.appendChild(userElement); //STEP 3:
